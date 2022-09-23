import db from '../config/db'
import { Request, Response } from 'express'

async function getComment(request:Request, response:Response) {
    const { id } = request.params
    
    const comment = await db.comment.findFirst({
        where: {
            id: Number(id)
        }
    });
    
    return response.status(200).json(comment ? comment : "Comentario não localizado!")
}

async function createComment(request:Request, response:Response) {
    const { content, authorId, postId } = request.body

    const comment = await db.comment.create({
        data: {
            content: content,
            authorId: Number(authorId),
            postId: Number(postId)
        }
    })

    return response.status(200).json(comment)
}

async function updateComment(request:Request, response:Response) {
    const { id } = request.params
    const { content } = request.body

    const comment = await db.comment.update({
        where: {
            id: Number(id)
        },
        data: {
            content: content
        }
    })

    return response.status(200).json(comment)
}

async function deleteComment(request:Request, response:Response) {
    const { id } = request.params

    await db.comment.delete({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json("Comentario deletado!")
}

export default {
    getComment,
    createComment,
    updateComment,
    deleteComment
}