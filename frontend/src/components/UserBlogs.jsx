//frontend/src/components/userblogs.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Blog } from './Blog'

export const UserBlogs = () => {
  // const [blogs, setBlogs] = useState()
  const [user, setUser] = useState()
  const id = localStorage.getItem('userId')

  const sendRequest = async () => {
    const res = await axios
      .get(`https://hdr-backend.herokuapp.com/api/blog/user/${id}`)
      .catch(err => console.log(err))
    const data = await res.data
    return data
  }

  useEffect(() => {
    // sendRequest().then(data => setBlogs(data.blogs.blogs))
    sendRequest().then(data => setUser(data.user))
  }, [])
  console.log(user)

  return (
    <div>
      {/* {blogs && */}
      {/* blogs.map((blog, index) => ( */}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            // userName={blog.name}
            userName={user.name}
          />
        ))}
    </div>
  )
}
