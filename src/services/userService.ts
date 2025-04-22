import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// List all users
export const findAll = async () => {
  return await prisma.user.findMany();
};

// Create a new user
export const create = async (body: any) => {
  const {email, name } = body;
  return await prisma.user.create({
    data: {
      email,
      name,
    },
  });
};

export default { create, findAll };