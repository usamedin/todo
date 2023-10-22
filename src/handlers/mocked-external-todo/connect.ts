import { Context, HandlerEvent } from "../../types/Handler";

export async function connect(event: HandlerEvent, context: Context) {
  console.log('event.body connect', event)
  const token = 'QAr8Q~QPxZTJUhIJiUzhddHhJ_zh3CIrPfKYXbyK' // mocked/hardcoded token
  const data = {
    userId: event.userId,
    webhookUrl: event.body.webhookUrl,
    token: event.body.token
  }
  await context.prisma.externalIntegrationMock.upsert({
    where: {
      userId: data.userId
    },
    update: data,
    create: data,
  })

  return {
    token
  }
}
