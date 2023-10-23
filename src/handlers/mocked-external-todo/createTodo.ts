import Joi from "joi";
import { Context, HandlerEvent } from "../../types/Handler";
import { TodoStatus } from "../../db/generated/client";
import { ErrorResponse } from "../../utils/ResponseCodes";
import { sendWebhook } from "./sendWebhook";

export async function createTodo(event: HandlerEvent, context: Context) {
  const { value: todo, error } = CreateTodoSchema.validate(event.body)
  if (error) {
    throw { ...ErrorResponse.INVALID_INPUT_PARAMETERS, message: error.details }
  }

  const todoResponse = await context.prisma.externalTodoMock.create({
    data: {
      value: todo.value,
      status: TodoStatus.TODO,
      userId: event.userId
    },
  })

  await sendWebhook(todoResponse, event.headers, context)

  return todoResponse
}

export const CreateTodoSchema = Joi.object({
  value: Joi.string().max(300).required(),
}).unknown(true)