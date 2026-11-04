import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'

export default function Navbar() {
    
  const token = useAuthStore((state) => state.token)


  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'  component={Link} to ='/' sx={{textDecoration :'none' , color:'inherit'}}>
          KaShop
        </Typography>

        <Box sx={{flexGrow:1}}>
          <Button color='inherit' component={Link} to ='/'> Home </Button>

          {token ? <>
          <Button color='inherit'  component={Link} to ='/'> Logout</Button>
          </> : <>    <Button color='inherit'  component={Link} to ='/login'> Login </Button>
          <Button color='inherit'  component={Link} to ='/register'> Register </Button></>}
       
          
        </Box>
      </Toolbar>
    </AppBar>
  )
}
