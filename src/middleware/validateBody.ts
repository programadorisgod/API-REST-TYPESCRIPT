import { NextFunction, Request, Response } from 'express'
import { handlerError } from '../utils/handlerError'


export const validateBody = (req:Request, res:Response, next:NextFunction) => {
  if (req.body && typeof req.body === 'object' && Object.keys(req.body).length > 0) {
    next()
  }else{
    handlerError(null, res, 'Body is empty')
  }
}
