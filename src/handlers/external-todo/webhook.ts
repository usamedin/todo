import axios from "axios";
import { Context, HandlerEvent } from "../../types/Handler";
import { SERVICE_DOMAIN } from "../../utils/constants";
import { getHeadersJSONType } from "../../utils/RequestUtil";
import NodeCache from "node-cache";
import { getLockKey } from "../../utils/util";

const cacheLock = new NodeCache({ stdTTL: 100, checkperiod: 60 });

export async function webhookHandler(event: HandlerEvent, context: Context) {
  const { todoItem } = event.body

  const lockKey = getLockKey(todoItem)
  const lock = cacheLock.get(lockKey)

  if (lock) {
    console.log('Cache lock found, skipping update')
    return
  }

  cacheLock.set(lockKey, true, 60)

  const todoMapping = await context.prisma.externalTodoMapping.findFirst({
    where: { externalId: todoItem.id }
  })

  let todo

  if (!todoMapping) {
    // Create
    console.debug('Creating item')

    const response = await axios.post(`${SERVICE_DOMAIN}/api/todo`, {
      value: todoItem.value,
      status: todoItem.status
    }, {
      headers: getHeadersJSONType(event.headers),
    })

    todo = response.data

    await context.prisma.externalTodoMapping.create({
      data: {
        id: todo.id,
        externalId: todoItem.id
      }
    })
  } else {
    // Update
    console.debug('Updating item')

    const response = await axios.put(`${SERVICE_DOMAIN}/api/todo/${todoMapping.id}`, {
      value: todoItem.value,
      status: todoItem.status
    }, {
      headers: getHeadersJSONType(event.headers),
    })

    todo = response.data
  }

  return {
    success: true,
    id: todo?.id,
    externalId: todoItem.id
  }
}
