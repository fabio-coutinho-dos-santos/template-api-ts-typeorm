import { Router, Request, Response } from "express";
import { SubjectController } from "./controllers/SubjectController";
import validate from "./middlewares/validateResource";
import { ApiErrors, BadRequestError } from "./helpers/ApiErrors";

const subjectController = new SubjectController()
const routes = Router()
routes.post('/subjects', validate(), subjectController.create)
routes.get('/subjects', validate(), subjectController.getAll)
routes.get('/subjects/error', validate(), subjectController.testApiError)
routes.get('/subjects/file', validate(), subjectController.storeFile)

export default routes