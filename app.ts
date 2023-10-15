import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { VERSION } from './src/utils/constants';
import { createTodoHandler } from './src/handlers/todo/createTodo';

const app = express();
const port = 3000;

app.get('/about', (req, res) => {
  res.send({ serviceName: 'Todo service', version: VERSION });
});

app.get('/api/create', createTodoHandler)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
