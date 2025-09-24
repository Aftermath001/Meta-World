import { FastifyInstance } from 'fastify';
import healthRoutes from './health';
import userRoutes from './users';
import webhookRoutes from './webhooks';

export default async function routes(fastify: FastifyInstance) {
  fastify.register(healthRoutes);
  fastify.register(userRoutes);
  fastify.register(webhookRoutes);
}