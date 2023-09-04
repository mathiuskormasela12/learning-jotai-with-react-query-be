// ========== Todo Middleware
// import all package
import { body, validationResult } from 'express-validator'

export const createTodoMiddleware = [
  body('todoName', 'Todo name is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()[0].msg
      })
    }

    return next()
  }
]
