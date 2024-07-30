require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/api/config/db')
const authRouter = require('./src/api/routes/auth')
const userRouter = require('./src/api/routes/user')
const postRouter = require('./src/api/routes/post')
const commentRouter = require('./src/api/routes/comment')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/posts', postRouter)
app.use('/api/v1/comments', commentRouter)

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
