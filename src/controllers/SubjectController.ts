import { Request, Response } from "express";
import { subjectRepository } from "../core/repositories/subjectRepository";

export class SubjectController {

  async create(request: Request, response: Response) {
    const body = request.body;
    const newSubject = subjectRepository.create(body)
    const stored = await subjectRepository.save(newSubject)
    return response.status(201).json(newSubject);
  }

  async getAll (request: Request, response: Response) {
     const subjects = await subjectRepository.find();
     return response.status(200).json(subjects);
  }

}