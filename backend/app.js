//backend/app.js
import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blog-router.js'
import router from './routes/user-routes.js'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/user', router)
app.use('/api/blog', blogRouter)

const dbUrl = process.env.DB_URL
const appUrl = process.env.APP_URL
const port = process.env.PORT || 5000

mongoose
  .connect(dbUrl)
  .then(() => app.listen(port))
  .then(() =>
    console.log(`conectado ao mongodb porta ${appUrl}`)
  )
  .catch(err => console.log(err))
