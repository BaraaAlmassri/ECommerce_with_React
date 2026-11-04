import React from 'react'
import useCart from '../../hooks/useCart'
import { useAuthStore } from '../../store/useAuthStore';
import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cart() {



    const token = useAuthStore((state)=> state.token)
    const {data , isPending , isError} = useCart();


    if(!token) {
        return(
            <Box sx={{textAlign :'center' , py:6}}>
                <Typography variant='h5'>
                           please login to view your cart
                </Typography>

               <Button component={Link} to= "/login" >
                    Login
               </Button>

            </Box>
        )
    }


    if (isPending){
        return <CircularProgress></CircularProgress>
    }

    if (isError){
        return <Alert severity='error'>Failed to Load Cart Items</Alert>
    }
  return (
    <div>Cart</div>
  )
}
