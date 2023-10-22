import { Context, HandlerEvent } from "../../types/Handler";
import { createTodoHandler } from "../todo/createTodo";
import { updateTodoHandler } from "../todo/updateTodo";

export async function webhook(event: HandlerEvent, context: Context) {
  const { todoItem } = event.body

  const todoMapping = await context.prisma.externalTodoMapping.findFirst({
    where: { externalId: todoItem.id }
  })

  let todo

  if (!todoMapping) {
    // Create
    console.debug('Creating item')

    todo = await createTodoHandler({
      body: {
        value: todoItem.value,
        status: todoItem.status
      },
      params: {},
      query: {},
      headers: event.headers,
      userId: event.userId
    }, context)

    await context.prisma.externalTodoMapping.create({
      data: {
        id: todo.id,
        externalId: todoItem.id
      }
    })
  } else {
    // Update
    console.debug('Updating item')

    todo = await updateTodoHandler({
      body: {
        value: todoItem.value,
        status: todoItem.status
      },
      params: { id: todoMapping.id },
      query: {},
      headers: event.headers,
      userId: event.userId
    }, context)
  }

  return {
    success: true,
    id: todo?.id,
    externalId: todoItem.id
  }
}
