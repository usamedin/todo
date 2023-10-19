import Joi from 'joi';
import { Context, HandlerEvent } from "../../types/Handler";
import { ErrorResponse } from '../../utils/ResponseCodes';

export async function updateTodoHandler(event: HandlerEvent, context: Context) {
  const id = event.params.id
  const { value: todo, error } = UpdateTodoSchema.validate(event.body)
  if (error) {
    throw { ...ErrorResponse.INVALID_INPUT_PARAMETERS, message: error.details }
  }

  const todoResponse = await context.prisma.toDo.update({
    where: { id },
    data: {
      value: todo.value,
    },
  })

  return todoResponse
}

export const UpdateTodoSchema = Joi.object({
  value: Joi.string().max(300).required(),
}).unknown(true)
