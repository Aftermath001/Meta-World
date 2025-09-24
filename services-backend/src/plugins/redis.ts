import Redis from 'ioredis';

export const redisPlugin = async (fastify) => {
  const redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  });

  fastify.decorate('redis', redis);

  fastify.addHook('onClose', async (instance, done) => {
    await redis.quit();
    done();
  });
};