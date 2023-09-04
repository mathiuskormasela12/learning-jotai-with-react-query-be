// ========== Todo Service
// import all package
import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export class TodoService {
  static async findAllTodos () {
    try {
      const data = await prismaClient.todos.findMany()

      return {
        statusCode: 200,
        data
      }
    } catch (err) {
      return {
        statusCode: 500,
        message: err.messagae,
        data: []
      }
    }
  }

  static async createTodo (todo) {
    try {
      const result = await prismaClient.todos.create({
        data: todo
      })

      return {
        statusCode: 201,
        data: result
      }
    } catch (err) {
      return {
        statusCode: 500,
        messagae: err.messagae,
        data: []
      }
    }
  }
}
