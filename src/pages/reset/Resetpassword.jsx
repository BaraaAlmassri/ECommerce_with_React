import { resetSchema } from '../../validation/authSchema';
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Resetpassword() {
       const [serverError , setServerError] = useState(null);
    const [success , setSuccess] = useState(false);
    const navigate = useNavigate();

        const{register , handleSubmit , formState: { errors,isSubmitting }} = useForm({
    resolver: yupResolver(resetSchema), mode:'onBlur'
  })


        const onSubmit = async (values)=>{
            console.log(values);
            try {
                const response = await axios.patch("https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword",values)
                setSuccess(true);
                navigate('/login');
            }catch(err){
                console.log(err.response);
                setServerError("Failed to ResetPassword");
            }


        }
  return (
    
   <Container maxWidth='sm'>
            <Box sx={{ bgcolor: 'white', boxShadow: 3, p: 4, borderRadius: 2, mt: 3 }}>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>ResetPassword</Typography>

                {serverError ? <Alert severity='error'> {serverError}</Alert> : null}
                 
                <Box component={'form'} onSubmit={handleSubmit(onSubmit)} >

                    <TextField label='Code' fullWidth margin='normal' {...register('code')}
                     error={errors.code} helperText={errors.code?.message}>

                    </TextField>

                    <TextField label='newPassword' fullWidth margin='normal' {...register('newPassword')}
                                         error={errors.newPassword} helperText={errors.newPassword?.message} >
                    
                                        </TextField>

                    
                    <TextField label='Email' fullWidth margin='normal' {...register('email')}
                     error={errors.email} helperText={errors.email?.message}>

                    </TextField>

                      
                    
                   
                          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}  disabled={isSubmitting}

                         >{isSubmitting? "Loading..." : "Reset Password"}</Button>
                                       
                </Box>
            </Box>
    </Container>
  )
}
