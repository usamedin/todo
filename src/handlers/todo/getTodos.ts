import { TodoStatus } from "../../db/generated/client";
import { Context, HandlerEvent } from "../../types/Handler";

export async function getTodosHandler(event: HandlerEvent, context: Context) {
  const todosResponse = await context.prisma.toDo.findMany({
    where: {
      status: { not: TodoStatus.DONE }
    }
  })

  return todosResponse
}
