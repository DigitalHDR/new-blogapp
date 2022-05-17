//backend/controllers/blog-controllers.js
import Blog from '../model/Blog'
import mongoose from 'mongoose'
import User from '../model/User'

export const getAllBlogs = async (req, res, next) => {
  let blogs
  try {
    blogs = await Blog.find()
  } catch (err) {
    return console.log(err)
  }
  if (!blogs) {
    return res.status(400).json({ message: 'Nenhum blog encontrado' })
  }
  return res.status(200).json({ blogs })
}

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body

  let existingUser
  try {
    existingUser = await User.findById(user)
  } catch (err) {
    return console.log(err)
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: 'Não foi possível encontrar o usuário com este ID' })
  }

  const blog = new Blog({
    title,
    description,
    image,
    user
  })
  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await blog.save({session})
    // await blog.save()  foi alterado
    existingUser.blogs.push(blog)
    await existingUser.save({ session })
    await session.commitTransaction()
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err })
  }
  return res.status(200).json({ blog })
}

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body
  const blogId = req.params.id
  let blog
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description
    })
  } catch (err) {
    return console.log(err)
  }
  if (!blog) {
    return res.status(500).json({ message: 'impossível atualizar blog' })
  }
  return res.status(200).json({ blog })
}

export const getById = async (req, res, next) => {
  const id = req.params.id
  let blog
  try {
    blog = await Blog.findById(id)
  } catch (err) {
    return console.log(err)
  }
  if (!blog) {
    return res.status(404).json({ message: 'Nenhum blog encontrado' })
  }
  return res.status(200).json({ blog })
}

export const deleteBlog = async (req, res, next) => {
  const id = req.params.id
  let blog
  try {
    blog = await Blog.findByIdAndDelete(id)
  } catch (err) {
    return console.log(err)
  }
  if (!blog) {
    return res.status(500).json({ message: 'Nenhum blog encontrado' })
  }
  return res.status(200).json({ message: 'Blog Deletado com sucesso' })
}
