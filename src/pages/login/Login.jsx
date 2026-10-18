import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  return (
    <Container maxWidth='sm'>
            <Box sx={{ bgcolor: 'white', boxShadow: 3, p: 4, borderRadius: 2, mt: 3 }}>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>Create Account</Typography>
                 
                <Box component={'form'} >

                    
                    <TextField label='Email' fullWidth margin='normal' 
                    >

                    </TextField>
                    <TextField label='Password' fullWidth margin='normal' 
                     >

                    </TextField>
                   
                   
                          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}
                        
                                         
                        
                                       >Login</Button>
                                       <Box sx={{display:'flex' , justifyContent:'space-between' , mt:2}}>
                                          <Link to='/resetpassword'>Forgot your password?</Link>
                                          <Link to='/register'>Don't have an account?</Link>
                                       </Box>
                </Box>
            </Box>
    </Container>
  )
}
