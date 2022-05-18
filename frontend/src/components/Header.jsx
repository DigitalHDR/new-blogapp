//frontend/src/components/header.jsx
import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#6495ed'
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display="flex" marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="secondary"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="secondary"
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
