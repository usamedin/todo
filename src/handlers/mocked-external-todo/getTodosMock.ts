import { Context, HandlerEvent } from "../../types/Handler";

export async function getTodosMockHandler(event: HandlerEvent, context: Context) {
  const todosResponse = await context.prisma.externalTodoMock.findMany({
    where: {
      userId: event.userId
    },
  })

  return todosResponse
}