//frontend/src/component/blogdetail
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const labelStyles = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }
export const BlogDetail = () => {
  const [blog, setBlog] = useState()
  const id = useParams().id
  console.log(id)

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    imageURL: ''
  })

  const handleChange = e => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch(err => console.log(err))
    const data = await res.data
    return data
  }

  useEffect(() => {
    fetchDetails().then(data => {
      setBlog(data.blog)
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
        // imageURL: data.blog.image  NAO SEI PORQUE MAIS SÓ FUNCIONOU COM O DE BAIXO
        image: data.blog.image
      })
    })
  }, [id])
  console.log(blog)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)
    // sendRequest().then(data => console.log(data))
  }

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            boder={3}
            borderColor="#6495ed"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={'auto'}
            marginTop={3}
            display="flex"
            flexDirection={'column'}
            width={'80%'}
          >
            <Typography
              fontWeight={'bold'}
              padding={3}
              color="grey"
              variant="h2"
              textAlign={'center'}
            >
              Post your Blog
            </Typography>
            <InputLabel sx={labelStyles}>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Description</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.description}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>ImageURL</InputLabel>
            <TextField
              name="imageURL"
              onChange={handleChange}
              value={inputs.image}
              margin="normal"
              variant="outlined"
            />
            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="warning"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  )
}
