//backend/app.js
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes'

const app = express()
app.use(express.json())
app.use('/api/user', router)

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.yt9ns.mongodb.net/Blog?retryWrites=true&w=majority'
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log('conectado ao mongodb porta http://localhost:5000/api/user')
  )
  .catch(err => console.log(err))
