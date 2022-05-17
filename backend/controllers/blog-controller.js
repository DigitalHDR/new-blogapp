//backend/controllers/blog-controllers.js
import Blog from '../model/Blog'

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
