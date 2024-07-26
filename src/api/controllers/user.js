const User = require('../models/user')

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true
    }).select('-password')
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    if (req.user._id.toString() === id) {
      await User.findByIdAndDelete(id)
      res.status(200).json({ message: 'User deleted successfully' })
    } else {
      return res.status(403).json({ message: 'Forbidden' })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getUsers, getUserById, updateUser, deleteUser }
