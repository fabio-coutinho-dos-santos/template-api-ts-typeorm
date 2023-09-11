import { NextFunction, Request, Response } from "express";
import { ApiErrors } from "../helpers/ApiErrors";

export const httpError = (error: Partial<ApiErrors> & Error, request: Request, response: Response, next: NextFunction) => {
  console.log('Error Captured Inside Middleware')
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal Server Error'
  response.status(statusCode).json({
    statusCode: statusCode,
    message: message
  });
}