import Joi from "joi";
import { TodoStatus } from "../../db/generated/client";
import { Context, HandlerEvent } from "../../types/Handler";
import { ErrorResponse } from "../../utils/ResponseCodes";

export async function getTodosHandler(event: HandlerEvent, context: Context) {
  let { pageNumber, pageSize, status } = {
    pageNumber: '1',
    pageSize: '10',
    status: undefined,
    ...event.query
  }

  const { value: todo, error } = GetTodosSchema.validate({
    pageNumber,
    pageSize,
    status
  })
  if (error) {
    throw { ...ErrorResponse.INVALID_INPUT_PARAMETERS, message: error.details }
  }

  const pageSizeInt = parseInt(pageSize);
  const pageNumberInt = parseInt(pageNumber);
  const skip = (pageNumberInt - 1) * pageSizeInt;

  const todosResponse = await context.prisma.toDo.findMany({
    where: {
      status: (status ? status : { not: TodoStatus.DONE }),
      userId: event.userId
    },
    skip,
    take: pageSizeInt,
  })

  return {
    items: todosResponse,
    pageNumber: pageNumberInt,
    pageSize: pageSizeInt
  }
}

export const GetTodosSchema = Joi.object({
  pageNumber: Joi.number().min(1),
  pageSize: Joi.number().max(100),
  status: Joi.string().valid('TODO', "IN_PROGRESS", 'DONE'),
}).unknown(true)
