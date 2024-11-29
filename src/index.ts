import fastify, { FastifyReply, FastifyRequest } from "fastify";

const app = fastify()

app.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return res.send("hello world!")
})

app.listen({
    port:4444,
    host: '0.0.0.0'
}, ()=> console.log("running on port 4444"))