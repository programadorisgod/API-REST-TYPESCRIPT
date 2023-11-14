import { IUser } from '../interfaces/user.interface'
import User from '../models/users'
import { CustomError } from '../utils/handlerError'


export const createUser = async(user:IUser) => {
  try {

    const newUser = await User.create(user)

    return newUser

  } catch (error: any) {
    throw new CustomError(500, 'Error to create user')
  }
}

export const findAllUsers = async()=> {
  try {

    const users = await User.find()

    return users

  } catch (error) {
    throw new CustomError(500, 'Error to find users')
  }
}

export const findByIdUser = async(id:string) => {
  try {
    const user = await User.findById(id)
    
    return user

  } catch (error:any) {
    throw new CustomError(500, 'Error to find user')
  }
}

export const updateUser = async(id:string, user:IUser)=> {
  try {

    const userUpdated = await User.findByIdAndUpdate(id, user, {new: true})

    return userUpdated

  } catch (error) {
    throw new CustomError(500, '')
  }
}

export const deleteUser = async(id:string)=> {
  try {

    const userDeleted = await User.findByIdAndDelete(id)

    return userDeleted

  } catch (error) {
    throw new CustomError(500, 'Error to delete user')
  }
}