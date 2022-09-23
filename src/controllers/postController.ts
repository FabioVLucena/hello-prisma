import db from '../config/db'
import { Request, Response } from 'express';

async function getPost(request:Request, response:Response) {
    const { id } = request.params

    const post = await db.user.findFirst({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json(post)
}

async function createPost(request:Request, response:Response) {
    const { title, content, published, authorId } = request.body

    const post = await db.post.create({
        data: {
            title: title,
            content: content,
            published: published,
            authorId: authorId
        }
    })

    return response.status(200).json(post)
}

async function updatePost(request:Request, response:Response) {
    const { id } = request.params
    const { title, content, published } = request.body

    const post = await db.post.update({
        where: {
            id: Number(id)
        },
        data: {
            title: title,
            content: content,
            published: published
        }
    })

    return response.status(200).json(post)
}

async function deletePost(request:Request, response:Response) {
    const { id } = request.params

    await db.post.delete({
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json("Postagem deletada!")
}

async function selectManyPostByUser(request:Request, response:Response) {
    const { id } = request.body

    const posts = await db.post.findMany({
        where: {
            authorId: Number(id)
        }
    })

    return response.status(200).json(posts);
}

export default {
    getPost,
    createPost,
    updatePost,
    deletePost,
    selectManyPostByUser
}