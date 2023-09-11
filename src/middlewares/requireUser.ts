import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../helpers/ApiErrors";
import { verifyJwt } from "../helpers/JwtServices";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  let jwt = req.headers.authorization ?? ''
  if (jwt.toLowerCase().startsWith('bearer')) {
    jwt = jwt.slice('bearer'.length).trim();
  }
  const content = verifyJwt(jwt)
  console.log(content);
  if(content.valid && !content.experid){
    return next();
  }else{
    throw new UnauthorizedError;
  }
};

export default requireUser;