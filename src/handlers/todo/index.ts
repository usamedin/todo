import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { completeTodoHandler } from './completeTodo';
import { createTodoHandler } from './createTodo';
import { getTodosHandler } from './getTodos';
import { updateTodoHandler } from './updateTodo';


export default function addEndpoints(app: Express) {
  app.post('/api/todo', (request: Request, response: Response) => handlerMiddleware(createTodoHandler, request, response))
  app.put('/api/todo/:id', (request: Request, response: Response) => handlerMiddleware(updateTodoHandler, request, response))
  app.put('/api/todo/complete/:id', (request: Request, response: Response) => handlerMiddleware(completeTodoHandler, request, response))
  app.get('/api/todos', (request: Request, response: Response) => handlerMiddleware(getTodosHandler, request, response))
}
