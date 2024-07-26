const express = require('express')
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post')
const { isAuth } = require('../middlewares/auth')
const router = express.Router()

router.get('/', isAuth, getPosts)
router.get('/:id', isAuth, getPostById)
router.post('/', isAuth, createPost)
router.put('/:id', isAuth, updatePost)
router.delete('/:id', isAuth, deletePost)

module.exports = router
