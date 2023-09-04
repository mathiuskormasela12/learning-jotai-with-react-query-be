// ========= Todo Controller
// import all modules
import { TodoService } from '../services/todo.service.js'

export const getTodos = async (req, res) => {
  const result = await TodoService.findAllTodos()
  return res.status(result.statusCode).json(result)
}

export const createTodo = async (req, res) => {
  const result = await TodoService.createTodo(req.body)
  return res.status(result.statusCode).json(result)
}
