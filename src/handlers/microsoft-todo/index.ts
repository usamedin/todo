import { Request, Response, Express } from 'express';
import { handlerMiddleware } from "../../utils/RequestMiddleware";
import { connect } from "./connect";

export default function addEndpoints(app: Express) {
  app.post('/api/microsoft-todo/connect', (request: Request, response: Response) => handlerMiddleware(connect, request, response))
}
