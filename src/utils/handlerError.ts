import {Response } from 'express'
import { MongooseError } from 'mongoose'


export class CustomError extends Error {

  _code: number
  _message: string

  constructor(code:number, message:string) {
    super(message)
    this._code = code 
    this._message = message
  }

}

export const handlerError = (err: any, res: Response, message: string = 'Internal Server Error', code:number = 500 ) => {

  if (err instanceof CustomError) {
    res.status(err._code).json({ msg: err._message })
    return
  }else{
    res.status(code).json({ msg: message})
    return
  }

  if (err instanceof SyntaxError || err instanceof MongooseError)  {
    res.status(400).json({ msg: err.message })
  }
  
  
  
   
}