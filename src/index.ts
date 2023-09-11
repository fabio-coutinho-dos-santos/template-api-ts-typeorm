import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { httpError } from "./middlewares/httpError";
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from '../docs/apidoc';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json())
    app.use(routes)
    app.use(httpError)
    app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

    return app.listen(process.env.SERVER_PORT, () => {
      console.log(`App listening on port ${process.env.SERVER_PORT}`)
    });
  })