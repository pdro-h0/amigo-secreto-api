import express from "express"
import cors from "cors"
import https from "https"
import http from "http"
import { env } from "./env"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const runServer = (port: number, server:http.Server) =>{
    server.listen(port, () =>{
        console.log(`RUNNING AT ${port}`)
    })
}

const regularServer = http.createServer(app)
if(env.NODE_ENV === "production"){

} else {
    const serverPort = env.PORT ?? 8080
    runServer(serverPort, regularServer)
}