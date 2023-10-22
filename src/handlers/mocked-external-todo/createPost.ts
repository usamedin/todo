import Joi, { Context } from "joi";
import { HandlerEvent } from "../../types/Handler";
import { TodoStatus } from "../../db/generated/client";
import { ErrorResponse } from "../../utils/ResponseCodes";

export async function createPost(event: HandlerEvent, context: Context) {
  const { value: todo, error } = CreateTodoSchema.validate(event.body)
  if (error) {
    throw { ...ErrorResponse.INVALID_INPUT_PARAMETERS, message: error.details }
  }

  const todoResponse = await context.prisma.ExternalTodoMock.create({
    data: {
      value: todo.value,
      status: TodoStatus.TODO,
      userId: event.userId
    },
  })

  return todoResponse
}

export const CreateTodoSchema = Joi.object({
  value: Joi.string().max(300).required(),
}).unknown(true)