import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from '../../validations/RegisterSchema';


export default function Register() {

  



    const {register , handleSubmit,formState:{errors}} = useForm(

    {
      resolver:yupResolver(registerSchema)
    }
   );

   const RegisterForm = async (data)=>{
     try{
          const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register` , data);
          console.log(response);
     }catch(err) {
            console.log(err);
     }
   }
 
  return (
    <Box onSubmit={handleSubmit(RegisterForm)} component='section' className='registerPage'>
      <Typography component='h1' variant='h2'> Register</Typography>

      <Box component='form' sx={{marginTop:2 , display:'flex' , flexDirection:'column' , gap:2}}>
              <TextField fullWidth {...register("userName")} label="UserName" variant="outlined" 
              error={errors.userName}
              helperText={errors.userName?.message}
              />
            
              
              <TextField fullWidth {...register("fullName")} label="FullName" variant="outlined"  error={errors.fullName}
              helperText={errors.fullName?.message}/>
              <TextField fullWidth {...register("email")} label="Email" variant="outlined"  error={errors.email}
              helperText={errors.email?.message}/>
              <TextField fullWidth {...register("phoneNumber")} label="PhoneNumber" variant="outlined"  error={errors.phoneNumber}
              helperText={errors.phoneNumber?.message}/>
              <TextField fullWidth {...register("password")} label="Password" variant="outlined"  error={errors.password}
              helperText={errors.password?.message}/>

              <Button variant='contained' type='submit' sx={{width :100 , marginLeft:'auto' , marginRight:'auto'}}>Register</Button>

      </Box>
    </Box>
  )
}
