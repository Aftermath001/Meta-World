import fastifyCors from 'fastify-cors';

export default async function corsPlugin(fastify) {
  fastify.register(fastifyCors, {
    origin: '*', // Adjust this to specify allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
}