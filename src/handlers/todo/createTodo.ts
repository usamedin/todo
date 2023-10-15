import { TodoStatus } from '../../db/generated/client'
import { Context, HandlerEvent } from "../../types/Handler";

export async function createTodoHandler(event: HandlerEvent, context: Context) {
  const todo = event.body
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