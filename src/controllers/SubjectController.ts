import { Request, Response } from "express";
import { subjectRepository } from "../core/repositories/subjectRepository";
import { ApiErrors, BadRequestError, NotFoundError } from "../helpers/ApiErrors";
import { IStorage } from "../frameworks/Storage/IStorage";
import { CloudStorageService } from "../frameworks/Storage/CloudStorageService";
import { UseCaseStoreFile } from "../useCases/store.file";
import { AwsStorageService } from "../frameworks/Storage/AwsStorageService";

export class SubjectController {

  public storageService: IStorage;

  async create(request: Request, response: Response) {
    const body = request.body;
    const newSubject = subjectRepository.create(body)
    const stored = await subjectRepository.save(newSubject)
    return response.status(201).json(newSubject);
  }

  async getAll(request: Request, response: Response) {
    const subjects = await subjectRepository.find();
    return response.status(200).json(subjects);
  }

  async testApiError(request: Request, response: Response) {
    // try {
    throw new BadRequestError('Entity not found')
    // } catch (e) {
    //   response.status(500).json('Error')
    // }
  }

  async storeFile(request: Request, response: Response) {
    // const storageFile = new UseCaseStoreFile(new CloudStorageService)
    const storageFile = new UseCaseStoreFile(new AwsStorageService)
    await storageFile.sendFile();
    return response.status(200).json({
      message: 'File Stored',
      statusCode: 200
    });
  }

}