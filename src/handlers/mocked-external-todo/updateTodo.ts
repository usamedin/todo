import Joi from "joi";
import { Context, HandlerEvent } from "../../types/Handler";
import { ErrorResponse } from "../../utils/ResponseCodes";
import { sendWebhook } from "./sendWebhook";

export async function updateTodo(event: HandlerEvent, context: Context) {
  const id = event.params.id
  const { value: todo, error } = UpdateTodoSchema.validate(event.body)
  if (error) {
    throw { ...ErrorResponse.INVALID_INPUT_PARAMETERS, message: error.details }
  }

  try {
    const todoResponse = await context.prisma.externalTodoMock.update({
      where: {
        id,
        userId: event.userId
      },
      data: {
        value: todo.value,
        ...(todo.status ? { status: todo.status } : {})
      },
    })
    await sendWebhook(todoResponse, event.headers, context)

    return todoResponse
  } catch (error: any) {
    console.error('Error here ', error)
    // Prisma Item Not found
    if (error.code == 'P2025') {
      throw ErrorResponse.ITEM_NOT_FOUND
    }
    throw ErrorResponse.INTERNAL_SERVER_ERROR
  }
}

export const UpdateTodoSchema = Joi.object({
  value: Joi.string().max(300).required(),
}).unknown(true)
