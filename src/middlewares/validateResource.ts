import { NextFunction, Request, Response } from "express"

const validate = () => (req: Request, resp: Response, next: NextFunction) => {
  try {
    console.log(req.method)
    console.log('Validate data in middleware')
    next();
  } catch (e: any) {
    console.log(e)
    return resp.status(400).send(e.errors)
  }
}

export default validate