import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express';
import { VERSION } from './src/utils/constants';
import { createTodoHandler } from './src/handlers/todo/createTodo';
import { handlerMiddleware } from './src/utils/RequestMiddleware';
import { getTodosHandler } from './src/handlers/todo/getTodos';

const app = express();
app.use(express.json());

app.get('/about', (req, res) => {
  res.send({ serviceName: 'Todo service', version: VERSION });
});

app.post('/api/todo', (request: Request, response: Response) => handlerMiddleware(createTodoHandler, request, response))
app.get('/api/todos', (request: Request, response: Response) => handlerMiddleware(getTodosHandler, request, response))

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
