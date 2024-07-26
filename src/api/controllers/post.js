const Post = require('../models/post')

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username')
    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate('author', 'username')
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body, author: req.user._id })
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPost = await Post.findByIdAndDelete(id)
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json({ message: 'Post deleted successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost }
