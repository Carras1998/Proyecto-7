const User = require('../models/user')

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
    if (user.role !== 'admin')
      return res.status(403).json({ message: 'Acceso denegado' })
    next()
  } catch (error) {
    res.status(400).json({ message: 'Error de autorización', error })
  }
}

module.exports = { isAdmin }
