// ========== Server
// import all packages
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { todoRouter } from './router/todo.router.js'

dotenv.config({ path: '../.env' })

const {
  PORT = 3000,
  CLIENT = ''
} = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsOptions = {
  origin: (origin, callback) => {
    if (typeof origin !== 'string' || CLIENT.split(',').includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Blocked by cors'))
    }
  }
}
app.use(cors(corsOptions))

app.use('/api', todoRouter)

app.listen(PORT, () => console.log('The server is being run at port', PORT))
