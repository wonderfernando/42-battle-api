import fastify, { FastifyReply, FastifyRequest } from "fastify";

const app = fastify()

app.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return res.send("hello world!")
})

app.listen({
    port:3000,
    host: '0.0.0.0'
}, ()=> console.log("running on port 3000"))