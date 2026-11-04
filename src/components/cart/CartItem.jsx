import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartItem({item}) {
  return (
  <Paper sx={{p:2 , mb:3 ,display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
    <Box >
        <Typography>{item.productName}</Typography>
        <Typography>${item.price}</Typography>
    </Box>

    <Typography>Quantity: {item.count}</Typography>
    <Typography>Total: ${item.totalPrice}</Typography>
  </Paper>
  )
}
