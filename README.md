# ToDo Service

Welcome to the ToDo service, a robust platform for managing your tasks.

## Getting Started

To run the server locally, follow these steps:

1. Install the necessary dependencies by running `npm install`.
2. Start your local Postgres DB server.
3. Create a `.env` file in the project's root directory with the following configuration:

```env
VERSION=0.1.0

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dev?schema=public"
SERVICE_DOMAIN=http://localhost:3000

JWT_SIGNING_KEY=yGFOpB87B+Ndv2s55Btwbg==

EXTERNAL_TODO_INTEGRATION_URL=http://localhost:3000/external-mock
```
# Project Architecture

## Code Structure

- **app.ts:** The entry point of the server that initializes the Express server and sets up endpoints for accessing the API.
- **AuthMiddleware.ts:** Middleware for validating requests.
- **RequestMiddleware.ts:** Middleware for constructing simple events for API handlers and decoupling them from the server's technology, making it easier to deploy them as microservices.
- **src/handlers folder:** Code organized by services, including:
  - **todo:** The core API for managing todos.
  - **mocked-external-todo:** A service that mocks a third-party service.
  - **external-todo:** An integration service, such as Microsoft Todo integration, which can sync data from external sources to this service. Note that a Pub/Sub system/Queues will be needed for todo creation and updates to update third-party services.
- **src/utils:** Reusable utility functions.
- **Prisma:** A DB model manager for handling migrations and generating code and types for DB operations.
- **/postman:** Here, you can import a Postman collection created for this project to test various endpoints. A JWT token for authentication is included in the root folder.

## Integrations

For other integrations (similar to `external-todo`), a unified approach will be used:

- **Connect Handler:**
  - Authentication: Responsible for connecting to third-party services, performing authentication (OAuth), and refreshing tokens when necessary.
  - Initial Sync: Performs API requests to synchronize data between systems.

- **Webhook Handler:**
  - For services supporting webhooks, this handler responds to changes and synchronizes data between external systems and this service.

- **Sync Handler:**
  - For services not supporting webhooks, a worker can be scheduled to periodically sync data.

# Future Improvements

Here are some planned improvements for the ToDo service:

- Introduction of lists to group todos.
- Event-driven architecture: Conversion to microservices architecture, with each handler deployed as a separate function. Introduction of topics and queues (e.g., SNS/SQS) for better workload management, including retries, dead letter queues, and throttling.
- Signing requests from third parties to the webhook endpoint.
- Request verification in the integration service (webhook signature verification).
- Signing requests to third-party services.
- Implementation of unit tests.
- Improved handling of async requests with proper error messages and status codes.
- Implementation of structured logging.
- Traces and metrics for monitoring.
- Adoption of GraphQL for API interactions.

Feel free to reach out if you have any questions or would like to discuss these planned enhancements further.
