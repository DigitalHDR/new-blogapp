//frontend/src/components/header.jsx
import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>BlogsApp</Typography>
      </Toolbar>
    </AppBar>
  )
}
