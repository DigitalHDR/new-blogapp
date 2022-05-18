//frontend/src/components/header.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tab,
  Tabs,
  Typography
} from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'

export const Header = () => {
  const dispath = useDispatch()
  const [value, setValue] = useState()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#6495ed'
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>

        {isLoggedIn && (
          <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs"></Tab>
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"></Tab>
            </Tabs>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="secondary"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="secondary"
              >
                Signup
              </Button>
            </>
          )}

          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="secondary"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
