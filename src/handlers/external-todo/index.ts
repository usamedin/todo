import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { connectHandler } from "./connect";
import { webhookHandler } from './webhook';

export default function addEndpoints(app: Express) {
  app.post('/api/external-todo/connect', (request: Request, response: Response) => handlerMiddleware(connectHandler, request, response))
  app.post('/api/external-todo/webhook', (request: Request, response: Response) => handlerMiddleware(webhookHandler, request, response))
}
