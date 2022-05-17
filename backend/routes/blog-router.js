//backend/routes/blog-routes.js
import express from 'express'
import {
  addBlog,
  getAllBlogs,
  updateBlog,
  getById
} from '../controllers/blog-controller'
const blogRouter = express.Router()

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get('/:id', getById)

export default blogRouter
