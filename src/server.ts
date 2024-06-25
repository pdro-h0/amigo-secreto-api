import { env } from "./env";
import { requestIntercepter } from "./middlewres/request-intercepter";
import siteRoutes from "./routes/site";
import adminRoutes from "./routes/admin";

import fs from "node:fs";

import express from "express";
import cors from "cors";
import https from "https";
import http from "http";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("*", requestIntercepter);
app.use("/", siteRoutes);
app.use("/admin", adminRoutes);

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => {
    console.log(`RUNNING AT ${port}`);
  });
};

const regularServer = http.createServer(app);
if (env.NODE_ENV === "production") {
  const options = {
    key: fs.readFileSync(env.SSL_KEY),
    cert: fs.readFileSync(env.SSL_CERT),
  };

  const secServer = https.createServer(options, app);

  runServer(80, regularServer);
  runServer(433, secServer);
} else {
  const serverPort = env.PORT ?? 8080;
  runServer(serverPort, regularServer);
}
