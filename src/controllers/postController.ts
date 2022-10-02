import db from '../config/db'
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { Interface } from 'readline';

async function getPost(request:Request, response:Response) {
    const { id } = request.params

    const post = await db.post.findFirst({
        select:{
            tags: true
        },
        where: {
            id: Number(id)
        }
    })

    return response.status(200).json(post)
}

async function createPost(request:Request, response:Response) {
    const { title, content, published, authorId, tags } = request.body

    const post = await db.post.create({
        data: {
            title: title,
            content: content,
            published: published,
            authorId: authorId,
            tags: {
                connect: tags ? tags.map((tag: any) => ({ id: Number(tag)})) : [],
            }
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
        },
        include: {
            tags: true
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