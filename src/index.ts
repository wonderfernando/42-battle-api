import fastify, { FastifyReply, FastifyRequest } from "fastify";
import {routes} from "./routes"
import cors from "@fastify/cors"
const app = fastify()

app.register(routes)

app.register(cors, {
    origin: true
})
 
app.listen({
    port:4444,
    host: '0.0.0.0'
}, (err, address)=> console.log("running on port 4444"))