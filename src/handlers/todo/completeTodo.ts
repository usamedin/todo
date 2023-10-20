import { Context, HandlerEvent } from "../../types/Handler";
import { TodoStatus } from '../../db/generated/client';
import { ErrorResponse } from "../../utils/ResponseCodes";

export async function completeTodoHandler(event: HandlerEvent, context: Context) {
  const id = event.params.id

  try {
    const todoResponse = await context.prisma.toDo.update({
      where: {
        id,
        userId: event.userId
      },
      data: {
        status: TodoStatus.DONE,
      },
    })
    return todoResponse

  } catch (error: any) {
    console.log('Error here ', error.code)
    // Prisma Item Not found
    if (error.code == 'P2025') {
      throw ErrorResponse.ITEM_NOT_FOUND
    }
    throw ErrorResponse.INTERNAL_SERVER_ERROR
  }
}
