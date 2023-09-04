// ========= Todo Router
// import all packages
import { Router } from 'express'
import { createTodo, getTodos } from '../controllers/todo.controller.js'
import { createTodoMiddleware } from '../middlewares/todo.middleware.js'

export const todoRouter = Router()

todoRouter.get('/todos', getTodos)
todoRouter.post('/todos', createTodoMiddleware, createTodo)
