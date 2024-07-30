const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')
require('dotenv').config()

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    await User.deleteMany({})
    await Post.deleteMany({})
    await Comment.deleteMany({})

    const users = [
      {
        username: 'admin',
        email: 'admin@example.com',
        password: await bcrypt.hash('adminpassword', 10),
        role: 'admin'
      },
      {
        username: 'user1',
        email: 'user1@example.com',
        password: await bcrypt.hash('userpassword', 10),
        role: 'user'
      }
    ]

    const createdUsers = await User.insertMany(users)

    const posts = [
      {
        content: 'This is the first post',
        author: createdUsers[1]._id
      }
    ]

    const createdPosts = await Post.insertMany(posts)

    const comments = [
      {
        content: 'This is a comment on the first post',
        author: createdUsers[1]._id,
        post: createdPosts[0]._id
      }
    ]

    await Comment.insertMany(comments)

    console.log('Database seeded successfully')
    mongoose.connection.close()
  } catch (error) {
    console.log('Error seeding database:', error.message)
    mongoose.connection.close()
  }
}

seedDB()
