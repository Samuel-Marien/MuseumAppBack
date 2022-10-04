import cors from 'cors'
import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

// db and authUser
import connectDB from './db/connect.js'

// router
import authRouter from './routes/authRoutes.js'

// middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' })
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 6000

const start = async () => {
  try {
    await connectDB(process.env.MONGODB)
    app.listen(port, () =>
      console.log(
        `Server is listening on port ${port}\n🥭 successfully connected to MongoDB 🥭`
      )
    )
  } catch (error) {
    console.log(error)
  }
}

start()
