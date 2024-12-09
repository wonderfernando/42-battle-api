import "dotenv/config";
import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../Services/UserSevice";

export class AuthController {
    constructor() {}

    public login = async (req: FastifyRequest<{Body: {code:string}}>, res: FastifyReply) => {
       const userService = new UserService()
        const response = await fetch("https://api.intra.42.fr/oauth/token",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
       },
       body: JSON.stringify({
              grant_type: "authorization_code",
              client_id: process.env.CLIENT_ID,
              client_secret: process.env.CLIENT_SECRET,
              code: req.body.code,
              redirect_uri: process.env.REDIRECT_URI
       })
        })
        const data = await response.json()
        const responseMe = await fetch("https://api.intra.42.fr/v2/me",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.access_token}`
       },
        })
        const dataMe = await responseMe.json()
        console.log(dataMe)
        const user = await userService.login({username: dataMe.login, image: dataMe.image.link, name: dataMe.usual_full_name})
        return res.send({user, token: data.access_token})
}
}