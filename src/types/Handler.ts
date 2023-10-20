import { PrismaClient } from "../db/generated/client"

export type HandlerEvent = {
  body: Record<string, any>,
  query: Record<string, any>
  headers: Record<string, any>
  params: Record<string, any>,
  userId: string,
}

export type Context = {
  prisma: PrismaClient
}
export type HandlerType = (event: HandlerEvent, context: Context) => any