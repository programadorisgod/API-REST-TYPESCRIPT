import {Response } from 'express'
import { MongooseError } from 'mongoose'



export const handlerError = (err: any, res: Response, message: string) => {
     
  if (err instanceof SyntaxError || err instanceof MongooseError)  {
    res.status(400).json({ msg: err.message })
    return
  }else{
    res.status(500).json({ msg: message})
  }
  
   
}