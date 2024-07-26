require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { connectDB } = require('./src/api/config/db')
const authRouter = require('./src/api/routes/auth')
const userRouter = require('./src/api/routes/user')
const postRouter = require('./src/api/routes/post')
const cors = require('cors')

const app = express()

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('Conectado con éxito a la bbdd'))
  .catch((err) => console.log('Algo ha fallado:', err))

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/posts', postRouter)

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
