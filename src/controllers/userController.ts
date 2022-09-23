import db from '../config/db'
import { Request, Response } from 'express';

async function getUser(request:Request, response:Response) {
    const { id } = request.params

    const user = await db.user.findFirst({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json(user ? user : "Usuario não localizado!")
}

async function createUser(request:Request, response:Response) {
    const { email, name } = request.body

    const user = await db.user.create({
        data: {
            email: email,
            name: name
        }
    })

    return response.status(201).json(user)
}

async function updateUser(request:Request, response:Response) {
    const { id } = request.params
    const { email, name } = request.body

    const user = await db.user.update({
        where: {
            id: Number(id)
        },
        data: {
            email: email,
            name: name
        }
    })

    return response.status(200).json(user)
}

async function deleteUser(request:Request, response:Response) {
    const { id } = request.params

    await db.user.delete({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json("Usuario deletado!")
}

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser
}