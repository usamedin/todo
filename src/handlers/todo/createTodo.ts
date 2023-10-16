import Joi from 'joi';
import { TodoStatus } from '../../db/generated/client'
import { Context, HandlerEvent } from "../../types/Handler";
import { ErrorResponse } from '../../utils/ResponseCodes';

export async function createTodoHandler(event: HandlerEvent, context: Context) {
  const { value: todo, error } = CreateTodoSchema.validate(event.body)
  if (error) {
    throw { ...ErrorResponse.INVALID_INPUT_PARAMETERS, message: error.details }
  }

  console.log('todo', todo)

  const todoResponse = await context.prisma.toDo.create({
    data: {
      value: todo.value,
      status: TodoStatus.TODO,
    },
  })

  console.log(todoResponse)

  return todoResponse
}

export const CreateTodoSchema = Joi.object({
  value: Joi.string().max(300).required(),
}).unknown(true)