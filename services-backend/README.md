# Project Title: Services Backend

## Description
This project is a backend service built with TypeScript and Fastify. It provides a robust API for handling user operations, webhooks, and health checks, while integrating with various services such as Prisma for database interactions, Redis for caching, and Stripe for payment processing.

## Features
- Fastify framework for high performance
- TypeScript for type safety
- Prisma for database management
- Redis for caching
- Stripe integration for payment processing
- Health check endpoint

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Docker and Docker Compose
- PostgreSQL

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd services-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Run the database migrations:
   ```
   npx prisma migrate dev
   ```

### Running the Application
To start the application in development mode, use:
```
npm run dev
```

### Docker Setup
To run the application with Docker, use:
```
docker-compose -f docker-compose.dev.yml up
```

### Testing
To run tests, use:
```
npm run test
```

## API Endpoints
- **Health Check**: `GET /health`
- **Users**: Various endpoints for user operations (see routes/users.ts for details)
- **Webhooks**: Endpoints for handling webhooks from Stripe (see routes/webhooks.ts for details)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.