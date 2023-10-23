import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { VERSION } from './src/utils/constants';
import { AuthMiddlewere } from './src/utils/AuthMiddleware';
import ExternalTodoEndpoints from './src/handlers/external-todo'
import ExternalTodoMockEndpoints from './src/handlers/mocked-external-todo'
import CoreTodoApiEndpoints from './src/handlers/todo'

const app = express();
app.use(express.json());
app.use(AuthMiddlewere);

app.get('/about', (_req, res) => res.send({ serviceName: 'Todo service', version: VERSION }));

// Integrations
CoreTodoApiEndpoints(app)

// Integrations
ExternalTodoEndpoints(app)

// External Todo service mocked
ExternalTodoMockEndpoints(app)

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
