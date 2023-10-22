import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { connect } from "./connect";
import { createPost } from './createPost';

export default function addEndpoints(app: Express) {
  app.post('/mock/external-todo/connect', (request: Request, response: Response) => handlerMiddleware(connect, request, response))
  app.post('/mock/external-todo/create', (request: Request, response: Response) => handlerMiddleware(createPost, request, response))
}
