import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const prismaPlugin = async (fastify, options) => {
  fastify.decorate('prisma', prisma);

  fastify.addHook('onClose', async (instance, done) => {
    await prisma.$disconnect();
    done();
  });
};