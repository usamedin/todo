import axios from "axios";
import { ExternalTodoMock } from "../../db/generated/client";
import { Context } from "../../types/Handler";
import { getHeadersJSONType } from "../../utils/RequestUtil";

export async function sendWebhook(todo: ExternalTodoMock, headers: any, context: Context) {
  const integration = await context.prisma.externalIntegrationMock.findFirst({
    where: {
      userId: todo.userId
    }
  })

  if (integration?.webhookUrl) {
    try {
      const body = JSON.stringify({ todoItem: todo })

      await axios.post(integration.webhookUrl,
        body, { headers: getHeadersJSONType(headers) })

    } catch (error: any) {
      console.error('Webhook error', error.response.status, error.response.statusText, error.response.data)
    }
  }
} 