import { Router, Request, Response } from "express";
import { SubjectController } from "./controllers/SubjectController";
import validate from "./middlewares/validateResource";
import { ApiErrors, BadRequestError } from "./helpers/ApiErrors";

const routes = Router()
routes.post('/subjects', validate(), new SubjectController().create)
routes.get('/subjects', validate(), new SubjectController().getAll)
routes.get('/subjects/error', validate(), new SubjectController().testApiError)

export default routes