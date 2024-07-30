const express = require('express')
const { isAuth } = require('../middlewares/auth')
const {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} = require('../controllers/comment')
const router = express.Router()

router.get('/', isAuth, getComments)
router.get('/:id', isAuth, getCommentById)
router.post('/', isAuth, createComment)
router.put('/:id', isAuth, updateComment)
router.delete('/:id', isAuth, deleteComment)

module.exports = router
