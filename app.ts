import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express';
import { VERSION } from './src/utils/constants';
import { createTodoHandler } from './src/handlers/todo/createTodo';
import { handlerMiddleware } from './src/utils/RequestMiddleware';
import { getTodosHandler } from './src/handlers/todo/getTodos';
import { updateTodoHandler } from './src/handlers/todo/updateTodo';
import { completeTodoHandler } from './src/handlers/todo/completeTodo';
import { AuthMiddlewere } from './src/utils/AuthMiddleware';
import ExternalTodoEndpoints from './src/handlers/external-todo'
import ExternalTodoMock from './src/handlers/mocked-external-todo'

const app = express();
app.use(express.json());
app.use(AuthMiddlewere);

app.get('/about', (req, res) => {
  res.send({ serviceName: 'Todo service', version: VERSION });
});

app.post('/api/todo', (request: Request, response: Response) => handlerMiddleware(createTodoHandler, request, response))
app.put('/api/todo/:id', (request: Request, response: Response) => handlerMiddleware(updateTodoHandler, request, response))
app.put('/api/todo/complete/:id', (request: Request, response: Response) => handlerMiddleware(completeTodoHandler, request, response))
app.get('/api/todos', (request: Request, response: Response) => handlerMiddleware(getTodosHandler, request, response))

// Integrations
ExternalTodoEndpoints(app)

// External Todo service mocked
ExternalTodoMock(app)

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
