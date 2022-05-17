//backend/app.js
import express from 'express'
import mongoose from 'mongoose'
const app = express()

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.yt9ns.mongodb.net/Blog?retryWrites=true&w=majority'
  )
  .then(() => app.listen(5000))
  .then(() => console.log('conectado ao mongodb porta 5000'))
  .catch((err) => console.log(err))
