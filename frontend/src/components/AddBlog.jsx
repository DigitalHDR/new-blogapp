//fronend/src/componenst/addblogs.jsx
import React, { useState } from 'react'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useStyles  from './utils'

const labelStyles = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }
export const AddBlog = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    imageURL: '',
  })

  const handleChange = e => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const sendRequest = async () => {
    const res = await axios
      .post(`https://hdr-backend.herokuapp.com/api/blog/add`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem('userId'),
      })
      .catch(err => console.log(err))
    const data = await res.data
    return data
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)
    sendRequest()
      .then(data => console.log(data))
      .then(() => navigate('/blogs'))
  }

  return (
    <div>
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
            className={classes.font}
            fontWeight={'bold'}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={'center'}
          >
            Post your Blog
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Title
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="normal"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Description
          </InputLabel>
          <TextField
            className={classes.font}
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="normal"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            ImageURL
          </InputLabel>
          <TextField
            className={classes.font}
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
    </div>
  )
}
