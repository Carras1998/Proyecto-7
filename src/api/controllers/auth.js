const User = require('../models/user')
const bcrypt = require('bcrypt')
const { generateSign } = require('../utils/jwt')

const register = async (req, res) => {
  try {
    const user = new User(req.body)
    const userDuplicated = await User.findOne({ email: req.body.email })
    if (userDuplicated) {
      return res
        .status(400)
        .json({ message: 'Este email ya ha sido registrado' })
    }
    const userSaved = await user.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json('Usuario o contraseña incorrectos')
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ token, user })
    } else {
      return res.status(400).json('Usuario o contraseña incorrectos')
    }
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = { register, login }
