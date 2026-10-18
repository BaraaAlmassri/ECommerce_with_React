import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from '../../validation/authSchema'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {

    const [serverError , setServerError] = useState(null);
    const [success , setSuccess] = useState(false);
    const navigate = useNavigate();

        const{register , handleSubmit , formState: { errors,isSubmitting }} = useForm({
    resolver: yupResolver(registerSchema), mode:'onBlur'
  })


        const onSubmit = async (values)=>{
            console.log(values);
            try {
                const response = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Register",values)
                setSuccess(true);
                navigate('/login');
            }catch(err){
                console.log(err.response);
                setServerError("Registration Failed");
            }


        }


  return (
    <Container maxWidth='sm'>
            <Box sx={{ bgcolor: 'white', boxShadow: 3, p: 4, borderRadius: 2, mt: 3 }}>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>Create Account</Typography>
                  {serverError ? <Alert severity='error'> {serverError}</Alert> : null}
                <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>

                    <TextField label='Full Name' fullWidth margin='normal'  {...register('fullName')}
                     error={errors.fullName} helperText={errors.fullName?.message}>
                        
                    </TextField>

                  

                    <TextField label='User Name' fullWidth margin='normal' {...register('userName')}
                     error={errors.userName} helperText={errors.userName?.message}>

                    </TextField>
                    <TextField label='Email' fullWidth margin='normal' {...register('email')}
                     error={errors.email} helperText={errors.email?.message}>

                    </TextField>
                    <TextField label='Password' fullWidth margin='normal' {...register('password')}
                     error={errors.password} helperText={errors.password?.message}>

                    </TextField>
                    <TextField label='Phone Number' fullWidth margin='normal' {...register('phoneNumber')}
                     error={errors.phoneNumber} helperText={errors.phoneNumber?.message}>

                    </TextField>
                   
                          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}
                        
                                          disabled={isSubmitting}
                        
                                       >{isSubmitting ? "Loading...." : "Register"}</Button>
                                       <Typography variant='body2' sx={{ mt: 2, textAlign: 'center' }}>Already have an account?
                                          <Link to='/login'>Login</Link>
                                       </Typography>
                </Box>
            </Box>
    </Container>
  )
}
