import { IUser } from "../interfaces/user.interface";
import User from "../models/users";


export const createUser = async(user:IUser)=> {
    try {
        const newUser = await User.create(user)
        return newUser
    } catch (error) {
        return error
    }
}

export const findAllUsers = async()=> {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        return error
    }
}

export const findByIdUser = async(id:string)=> {
    try {
        const user = await User.findById(id)
        return user
    } catch (error) {
        return error
    }
}

export const updateUser = async(id:string, user:IUser)=> {
    try {
        const userUpdated = await User.findByIdAndUpdate(id, user, {new: true})
        return userUpdated
    } catch (error) {
        return error
    }
}

export const deleteUser = async(id:string)=> {
    try {
        const userDeleted = await User.findByIdAndDelete(id)
        return userDeleted
    } catch (error) {
        return error
    }
}