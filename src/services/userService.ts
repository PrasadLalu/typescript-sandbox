import { PrismaClient } from '@prisma/client';
import { MESSAGES } from '@constant';
import { created, success, notFound, conflict, noContent } from '@statusCode';

const prisma = new PrismaClient();

const findAll = async () => {
    const users: any = await prisma.user.findMany();

    if (!users) {
        return { ...notFound, message: MESSAGES.USER_NOT_FOUND };
    }

    return { ...success, data: users };
};

const create = async (body: any) => {
    const { email, name } = body;
    const query = { where: { email }};

    let user = await prisma.user.findUnique(query);
    if (user) {
        return { ...conflict, message: MESSAGES.USER_ALREADY_CREATED };
    }

    user = await prisma.user.create({
        data: {
            email,
            name,
        },
    });

    return { ...created, data: user };
};

const findById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    });
    if (!user) {
        return { ...notFound, message: MESSAGES.USER_NOT_FOUND };
    }

    return { ...success, data: user };
};

const updateById = async (id: string, data: any) => {
    const query = { where: { id: parseInt(id)}};

    let user = await prisma.user.findUnique(query);
    if (!user) {
        return { ...notFound, message: MESSAGES.USER_NOT_FOUND };
    }

    user = await prisma.user.update({
        where: {
            id:  parseInt(id),
        },
        data
    });

    return { ...success, data: user };
};

const deleteById = async (id: string) => {
    const query = { where: {id : parseInt(id) }};
    const user = await prisma.user.findUnique(query);
    if (!user) {
        return { ...notFound, message: MESSAGES.USER_NOT_FOUND };
    }

    await prisma.user.delete(query);
    return { ...noContent };
};

export default { create, findAll, findById, updateById, deleteById };
