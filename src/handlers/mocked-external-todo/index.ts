import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { connect } from "./connect";
import { createTodo } from './createTodo';
import { updateTodo } from './updateTodo';

export default function addEndpoints(app: Express) {
  app.post('/mock/external-todo/connect', (request: Request, response: Response) => handlerMiddleware(connect, request, response))
  app.post('/mock/external-todo/todo', (request: Request, response: Response) => handlerMiddleware(createTodo, request, response))
  app.put('/mock/external-todo/todo/:id', (request: Request, response: Response) => handlerMiddleware(updateTodo, request, response))
}
