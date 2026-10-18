import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

        const{register , handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema), mode:'onBlur'
  })


        const onSubmit = (values)=>{
            console.log(values);


        }


  return (
    <Container maxWidth='sm'>
            <Box sx={{ bgcolor: 'white', boxShadow: 3, p: 4, borderRadius: 2, mt: 3 }}>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>Create Account</Typography>
                <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>

                    <TextField label='Full Name' fullWidth margin='normal'  {...register('fullName')}>
                        
                    </TextField>
                    <TextField label='User Name' fullWidth margin='normal' {...register('userName')}>

                    </TextField>
                    <TextField label='Email' fullWidth margin='normal' {...register('email')}>

                    </TextField>
                    <TextField label='Password' fullWidth margin='normal' {...register('password')}>

                    </TextField>
                    <TextField label='Phone Number' fullWidth margin='normal' {...register('phoneNumber')}>

                    </TextField>
                   
                        <Button type='submit' variant='contained' fullWidth sx={{mt:2}}>Register</Button>
                </Box>
            </Box>
    </Container>
  )
}
