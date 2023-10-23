import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { connectMockHandler } from "./connectMock";
import { createMockTodohandler } from './createTodoMock';
import { updateMockTodoHandler } from './updateTodoMock';

export default function addEndpoints(app: Express) {
  app.post('/mock/external-todo/connect', (request: Request, response: Response) => handlerMiddleware(connectMockHandler, request, response))
  app.post('/mock/external-todo/todo', (request: Request, response: Response) => handlerMiddleware(createMockTodohandler, request, response))
  app.put('/mock/external-todo/todo/:id', (request: Request, response: Response) => handlerMiddleware(updateMockTodoHandler, request, response))
}
