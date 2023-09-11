import 'express-async-errors'
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { httpError } from "./middlewares/httpError";

function createServer(){
  AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json())
    app.use(routes)
    app.use(httpError)
    return app
  })
}

export default createServer
