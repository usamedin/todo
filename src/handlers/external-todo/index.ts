import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { connect } from "./connect";
import { webhook } from './webhook';

export default function addEndpoints(app: Express) {
  app.post('/api/external-todo/connect', (request: Request, response: Response) => handlerMiddleware(connect, request, response))
  app.post('/api/external-todo/webhook', (request: Request, response: Response) => handlerMiddleware(webhook, request, response))
}
