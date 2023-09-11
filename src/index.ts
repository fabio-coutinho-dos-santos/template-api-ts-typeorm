import 'express-async-errors'
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { httpError } from "./middlewares/httpError";

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json())
    app.use(routes)
    app.use(httpError)
    app.get('/', (req, res) => {
      return res.json('Working')
    })

    return app.listen(process.env.SERVER_PORT, () => {
      console.log(`App listening on port ${process.env.SERVER_PORT}`)
    });
  })