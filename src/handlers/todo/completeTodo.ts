import { Context, HandlerEvent } from "../../types/Handler";
import { TodoStatus } from '../../db/generated/client';

export async function completeTodoHandler(event: HandlerEvent, context: Context) {
  const id = event.params.id

  const todoResponse = await context.prisma.toDo.update({
    where: { id },
    data: {
      status: TodoStatus.DONE,
    },
  })

  return todoResponse
}
