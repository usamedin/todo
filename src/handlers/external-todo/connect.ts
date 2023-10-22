import axios from "axios";
import { ExternalTodoIntegration } from "../../db/generated/client";
import { Context, HandlerEvent } from "../../types/Handler";
import { SERVICE_DOMAIN } from "../../utils/constants";

export async function connect(event: HandlerEvent, context: Context) {
  try {
    const body = JSON.stringify({
      webhookUrl: "http://localhost:3000/api/external-todo/webhook",
      token: "1234"
    })
    console.log('body', body)
    const response = await axios.post(`${SERVICE_DOMAIN}/mock/external-todo/connect`,
      body, { headers: event.headers })

    console.log('response', response)

    const integration = await context.prisma.externalTodoIntegration.create({
      data: {
        token: response.data.token,
        userId: event.userId
      },
    })

    // Initial sync, load all todos from 3rd party service
    await initialSync(integration)

    return {
      success: true
    }
  } catch (err: any) {
    console.error('Error in connect', err.response.statusCode)
  }

  return {
    success: false
  }
}

async function initialSync(integration: ExternalTodoIntegration) {
}
