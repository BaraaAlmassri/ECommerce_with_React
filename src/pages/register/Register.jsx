import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Register() {
  return (
    <Container maxWidth='sm'>
            <Box sx={{ bgcolor: 'white', boxShadow: 3, p: 4, borderRadius: 2, mt: 3 }}>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>Create Account</Typography>
                <Box component="form">

                    <TextField label='Full Name' fullWidth margin='normal'>
                        
                    </TextField>
                    <TextField label='User Name' fullWidth margin='normal'>

                    </TextField>
                    <TextField label='Email' fullWidth margin='normal'>

                    </TextField>
                    <TextField label='Password' fullWidth margin='normal'>

                    </TextField>
                    <TextField label='Phone Number' fullWidth margin='normal'>

                    </TextField>
                   
                        
                </Box>
            </Box>
    </Container>
  )
}
