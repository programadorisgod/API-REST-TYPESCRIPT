import { Router } from "express"

import { create, deleteUserById, findAll, findById, update } from "../controllers/users"
import { validateBody } from "../middleware/validateBody"

const routerUser = Router()

const path = '/api/v1/users'


routerUser.get(path, findAll)

routerUser.get(`${path}/:id`, findById)

routerUser.post(`${path}/create`, validateBody, create)

routerUser.patch(`${path}/update/:id`, validateBody, update)

routerUser.delete(`${path}/delete/:id`, deleteUserById)


export default routerUser