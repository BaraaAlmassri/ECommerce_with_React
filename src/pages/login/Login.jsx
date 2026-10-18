import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../../validation/authSchema'

export default function Login() {
        const [serverError , setServerError] = useState(null);
    const [success , setSuccess] = useState(false);
    const navigate = useNavigate();

        const{register , handleSubmit , formState: { errors,isSubmitting }} = useForm({
    resolver: yupResolver(loginSchema), mode:'onBlur'
  })


        const onSubmit = async (values)=>{
            console.log(values);
            try {
                const response = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Login",values)
                setSuccess(true);
                navigate('/');
            }catch(err){
                console.log(err.response);
                setServerError("Login Failed");
            }


        }
  return (
    <Container maxWidth='sm'>
            <Box sx={{ bgcolor: 'white', boxShadow: 3, p: 4, borderRadius: 2, mt: 3 }}>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>Login</Typography>

                {serverError ? <Alert severity='error'> {serverError}</Alert> : null}
                 
                <Box component={'form'} onSubmit={handleSubmit(onSubmit)} >

                    
                    <TextField label='Email' fullWidth margin='normal' {...register('email')}
                     error={errors.email} helperText={errors.email?.message}>

                    </TextField>
                    <TextField label='Password' fullWidth margin='normal' {...register('password')}
                     error={errors.password} helperText={errors.password?.message} >

                    </TextField>
                   
                   
                          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}  disabled={isSubmitting}
                        
                                         
                        
                                       >{isSubmitting? "Loading..." : "Login"}</Button>
                                       <Box sx={{display:'flex' , justifyContent:'space-between' , mt:2}}>
                                          <Link to='/code'>Forgot your password?</Link>
                                          <Link to='/register'>Don't have an account?</Link>
                                       </Box>
                </Box>
            </Box>
    </Container>
  )
}
