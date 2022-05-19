//frontend/src/components/blog.jsx
import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useNavigate } from 'react-router-dom'

export const Blog = ({
  title,
  description,
  imageURL,
  userName,
  isUser,
  id
}) => {
  const navigate = useNavigate()

  const handleEdit = e => {
    navigate(`/myBlogs/${id}`)
  }

  return (
    <div>
      <Card
        sx={{
          width: '40%',
          margin: 'auto',
          mt: 2,
          padding: 2,
          boxShadow: '5px 5px 10px #ccc',
          ':hover': {
            boxShadow: '10px 10px 20px #ccc'
          }
        }}
      >
        {isUser && (
          <Box display={'flex'}>
            <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton onClick={handleEdit}>
              <DeleteForeverIcon />
            </IconButton>
          </Box>
        )}

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b> {': '} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
