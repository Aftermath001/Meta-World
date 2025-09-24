export default async function registerPlugins(fastify) {
    fastify.register(import('./helmet'));
    fastify.register(import('./cors'));
    fastify.register(import('./prisma'));
    fastify.register(import('./redis'));
    fastify.register(import('./stripe'));
}