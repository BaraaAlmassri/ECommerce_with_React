import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Register() {
   const RegisterForm = async (data)=>{
     try{
          const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register` , data);
          console.log(response);
     }catch(err) {
            console.log(err);
     }
   }
   const {register , handleSubmit} = useForm();

  return (
    <Box onSubmit={handleSubmit(RegisterForm)} component='section' className='registerPage'>
      <Typography component='h1' variant='h2'> Register</Typography>

      <Box component='form' sx={{marginTop:2 , display:'flex' , flexDirection:'column' , gap:2}}>
              <TextField fullWidth {...register("userName")} label="UserName" variant="outlined" />
              <TextField fullWidth {...register("fullName")} label="FullName" variant="outlined" />
              <TextField fullWidth {...register("email")} label="Email" variant="outlined" />
              <TextField fullWidth {...register("phoneNumber")} label="PhoneNumber" variant="outlined" />
              <TextField fullWidth {...register("password")} label="Password" variant="outlined" />

              <Button variant='contained' type='submit' sx={{width :100 , marginLeft:'auto' , marginRight:'auto'}}>Register</Button>

      </Box>
    </Box>
  )
}
