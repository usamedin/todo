import axios from "axios";
import { ExternalTodoIntegration } from "../../db/generated/client";
import { Context, HandlerEvent } from "../../types/Handler";
import { SERVICE_DOMAIN } from "../../utils/constants";
import { getHeadersJSONType } from "../../utils/RequestUtil";

export async function connectHandler(event: HandlerEvent, context: Context) {
  try {
    const body = {
      webhookUrl: `${SERVICE_DOMAIN}/api/external-todo/webhook`,
      token: "1234"
    }
    console.log('body', body)
    const response = await axios.post(`${SERVICE_DOMAIN}/mock/external-todo/connect`,
      body,
      { headers: getHeadersJSONType(event.headers) })

    const integration = await context.prisma.externalTodoIntegration.create({
      data: {
        token: response.data.token,
        userId: event.userId
      },
    })

    // Initial sync, load all todos from 3rd party service
    await initialSync(integration, event.headers)

    return {
      success: true
    }
  } catch (err: any) {
    console.error('Error in connect', err.response)
  }

  return {
    success: false
  }
}

async function initialSync(integration: ExternalTodoIntegration, headers: any) {
  const { data: todos } = await axios.get(`${SERVICE_DOMAIN}/mock/external-todo/todos`, {
    headers: getHeadersJSONType(headers)
  })

  for (const todo of todos) {
    await axios.post(`${SERVICE_DOMAIN}/api/external-todo/webhook`, { todoItem: todo }, {
      headers: getHeadersJSONType(headers)
    })
  }
}
