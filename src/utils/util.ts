import { ToDo } from "../db/generated/client";
import crypto from 'crypto'

export function getLockKey(todo: ToDo) {
  const hash = crypto
    .createHash('sha256')
    .update(JSON.stringify({
      id: todo.id,
      value: todo.value,
      status: todo.status
    }))
    .digest('hex');
  return hash
}