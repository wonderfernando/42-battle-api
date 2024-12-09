import { FastifyInstance, FastifyReply } from "fastify"
import { FastifyRequestType } from "fastify/types/type-provider"
import { AuthController } from "./controllers/AuthController"

export const routes = (fastify: FastifyInstance) => {
    const authController = new AuthController()
    fastify.get("/", async (req, res) => {
        return res.send("hello world!")
    })

    fastify.post("/auth", authController.login)
}