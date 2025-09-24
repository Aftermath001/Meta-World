import fastifyHelmet from 'fastify-helmet';

export default async function helmetPlugin(fastify) {
  fastify.register(fastifyHelmet, {
    // You can customize helmet options here
    contentSecurityPolicy: false, // Disable CSP for simplicity, enable in production
  });
}