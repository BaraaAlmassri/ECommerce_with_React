import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'  component={Link} to ='/' sx={{textDecoration :'none' , color:'inherit'}}>
          KaShop
        </Typography>

        <Box sx={{flexGrow:1}}>
          <Button color='inherit' component={Link} to ='/'> Home </Button>
          <Button color='inherit'  component={Link} to ='/login'> Login </Button>
          <Button color='inherit'  component={Link} to ='/register'> Register </Button>
          <Button color='inherit'  component={Link} to ='/'> Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
