import { FastifyInstance } from 'fastify';

export default async function webhooksRoutes(fastify: FastifyInstance) {
  fastify.post('/webhooks/stripe', async (request, reply) => {
    const event = request.body;

    // Handle the event based on its type
    switch (event.type) {
      case 'payment_intent.succeeded':
        // Handle successful payment intent
        break;
      case 'payment_intent.payment_failed':
        // Handle failed payment intent
        break;
      // Add more cases as needed
      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }

    reply.status(200).send({ received: true });
  });
}