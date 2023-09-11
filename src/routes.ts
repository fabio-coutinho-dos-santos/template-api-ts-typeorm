import { Router, Request, Response } from "express";
import { SubjectController } from "./controllers/SubjectController";

const routes = Router()

routes.post('/subjects', new SubjectController().create)
routes.get('/subjects', new SubjectController().getAll)

export default routes