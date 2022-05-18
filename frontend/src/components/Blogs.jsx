//frontend/src/components/blogs.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Blog } from './Blog'

export const Blogs = () => {
  const [blogs, setBlogs] = useState()

  const sendRequest = async () => {
    const res = await axios.get('http://localhost:5000/api/blog').catch(err => {
      console.log(err)
    })
    const data = await res.data
    return data
  }

  useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs))
  }, [])
  console.log(blogs)

  return (
    <div>
      <Blog />
    </div>
  )
}
