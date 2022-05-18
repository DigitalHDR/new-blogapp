//frontend/src/components/header.jsx
import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tab,
  Tabs,
  Typography
} from '@mui/material'

export const Header = () => {
  const [value, setValue] = useState()

  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#6495ed'
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display="flex">
          <Tabs value={value} onChange={(e, val) => setValue(val)}>
            <Tab label="All Blogs"></Tab>
            <Tab label="My Blogs"></Tab>
          </Tabs>
        </Box>

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
