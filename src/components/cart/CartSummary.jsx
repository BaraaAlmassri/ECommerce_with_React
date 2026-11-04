import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartSummary({total}) {
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
    </Paper>
  )
}
