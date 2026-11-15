import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import useClearCart from '../../hooks/useClearCart'



export default function CartSummary({total}) {

  const {mutate : clearitem , isPending }= useClearCart();

  const handleClearCart =()=>{
    clearitem() ;
     
    }
  

  return (
    <Paper>
        <Typography variant='h6' sx={{p:3}}>
            Order Summary
        </Typography>

        <Divider />
        <Box>
            <Typography>Total Price : ${total}</Typography>
        </Box>

        <Button fullWidth variant='contained'>CheckOut</Button>

           <Button
        fullWidth
        variant="outlined"
        color="error"
        onClick={handleClearCart}
        disabled={isPending}

        sx={{mt : 3}}
      >
        {isPending ? 'Clearing...' : 'Clear Cart'}
      </Button>
       
    </Paper>
  )
}
