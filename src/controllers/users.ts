import { Request, Response } from 'express'
import { handlerError } from '../utils/handlerError'
import { createUser, deleteUser, findAllUsers, findByIdUser, updateUser } from '../services/users'

export const findById = async(req:Request, res:Response)=> {
    try {
        const {id} = req.params
        
        const user = await findByIdUser(id)

        if (!user) {
            res.status(404).json({msg: 'id is malformed'})
            return
        }

        res.status(200).json({user})

    } catch (error: any) {
       handlerError(error, res, 'Error to find users')
    }
}



export const findAll = async(_req:Request, res:Response)=> {
    try {
        const users = await findAllUsers()

        res.status(200).json({users})

    } catch (error) {
        handlerError(error, res, 'Error to find users')
    }
}

export const create = async(req:Request, res:Response)=> {
    try {
        const user = req.body

        const newUser = await createUser(user)

        res.status(201).json({newUser})
    } catch (error) {
        handlerError(error, res, 'Error to create user')
    }
}

export const update = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const user = req.body

        const userUpdated = await updateUser(id, user)

        res.status(200).json({userUpdated})
    } catch (error) {
        handlerError(error, res, 'Error to update user')
    }
}

export const deleteUserById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params

        const userDeleted = await deleteUser(id)

        res.status(200).json({userDeleted})
    } catch (error) {
        handlerError(error, res, 'Error to delete user')
    }
}