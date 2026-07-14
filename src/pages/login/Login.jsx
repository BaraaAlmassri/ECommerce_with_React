import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from '../../validations/LoginSchema';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';


export default function Login() {

   const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);

const setToken = useAuthStore((state)=> state.setToken);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(

    {
      resolver: yupResolver(loginSchema)
    }
  );

  const LoginForm = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`, data);
        
      setToken(response.data.accessToken);
      navigate('/')
  
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  }

  return (
    <Box  component='section' className='loginPage'>
      <Typography component='h1' variant='h2'> Login</Typography>



      <Box  component='form' onSubmit={handleSubmit(LoginForm)} sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>

        <TextField fullWidth {...register("email")} label="Email" variant="outlined" error={errors.email}
          helperText={errors.email?.message} />
       
        <TextField fullWidth {...register("password")} label="Password" variant="outlined" error={errors.password}
          helperText={errors.password?.message} />

        {serverErrors ?.length > 0 ? serverErrors.map((error) =>
          <Typography color='error' component='div' sx={{ marginLeft: 3 }}>{error}</Typography>
        ) : ''}

        <Button variant='contained' type='submit' sx={{ width: 100, marginLeft: 'auto', marginRight: 'auto' }} disabled={isSubmitting} >{isSubmitting ? <CircularProgress></CircularProgress> : "Login"}</Button>

      </Box>
    </Box>
  )
}
