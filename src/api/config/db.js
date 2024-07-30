const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('Conectado con éxito a la bbdd')
  } catch (error) {
    console.log('Fallo en la conexión con la BBDD:', error.message)
  }
}

module.exports = { connectDB }
