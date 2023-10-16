import { Request, Response } from "express";
import { ErrorResponse } from "./ResponseCodes";
import { PrismaClient } from "../db/generated/client";
import { HandlerType } from "../types/Handler";

const prisma = new PrismaClient()

export async function handlerMiddleware(
  handler: HandlerType,
  request: Request,
  response: Response
) {
  try {
    let error: any
    let context: any = { prisma }

    if (error) {
      response.status(ErrorResponse.BAD_REQUEST.statusCode).send({ messages: [error.message || ErrorResponse.BAD_REQUEST.message] })
      return
    }
    const result = await handler(stripRequest(request), context)

    response.send(result)
  } catch (error: any) {
    if (error.statusCode) {
      response.status(error.statusCode).send(error.message)
    } else {
      console.log('Error in HandlerMiddleware', error)
      const { statusCode, message } = ErrorResponse.INTERNAL_SERVER_ERROR
      response.status(statusCode).send(message)
    }
  }
}

function stripRequest(request: Request) {
  return {
    body: request.body,
    query: request.query,
    headers: request.headers,
    params: request.params,
    fields: undefined,
  }
}
