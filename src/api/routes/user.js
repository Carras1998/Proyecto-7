const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/auth')
const UserController = require('../controllers/user')

router.get('/', isAuth, isAdmin, UserController.getUsers)
router.get('/:id', isAuth, UserController.getUserById)
router.put('/:id', isAuth, isAdmin, UserController.updateUser)
router.delete('/:id', isAuth, UserController.deleteUser)

module.exports = router
