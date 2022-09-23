import db from '../config/db'
import { Request, Response } from 'express'

async function getTag(request:Request, response:Response) {
    const { id } = request.params

    const tag = await db.tag.findFirst({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json(tag ? tag : "Tag não localizada!")
}

async function createTag(request:Request, response:Response) {
    const { content } = request.body

    const tag = await db.tag.create({
        data: {
            content: content
        }
    })

    return response.status(200).json(tag)
}

async function updateTag(request:Request, response:Response) {
    const { id } = request.params
    const { content } = request.body

    const tag = await db.tag.update({
        where: {
            id: Number(id)
        },
        data: {
            content: content
        }
    })

    return response.status(200).json(tag)
}

async function deleteTag(request:Request, response:Response) {
    const { id } = request.params

    await db.tag.delete({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json("Tag deletada!")
}

export default {
    getTag,
    createTag,
    updateTag,
    deleteTag
}