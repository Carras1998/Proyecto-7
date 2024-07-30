const Comment = require('../models/comment')

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('author', 'username')
      .populate('post', 'content')
    res.status(200).json(comments)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
      .populate('author', 'username')
      .populate('post', 'content')
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    res.status(200).json(comment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createComment = async (req, res) => {
  try {
    const newComment = new Comment({ ...req.body, author: req.user._id })
    await newComment.save()
    res.status(201).json(newComment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    res.status(200).json(updatedComment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deletedComment = await Comment.findByIdAndDelete(id)
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    res.status(200).json({ message: 'Comment deleted successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
}
