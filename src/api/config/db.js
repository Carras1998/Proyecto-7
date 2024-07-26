const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Conectado con éxito a la bbdd')
  } catch (error) {
    console.log('Algo ha salido mal:', error.message)
    process.exit(1)
  }
}

module.exports = { connectDB }
