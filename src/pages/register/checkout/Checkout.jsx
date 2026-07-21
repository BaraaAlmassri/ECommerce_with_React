import React, { useState } from 'react'
import useCart from '../../../hooks/useCart'
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useCheckout from '../../../hooks/useCheckout';
export default function Checkout() {
    const {data , isLoading , isError , error} = useCart();
    const {mutate:checkOut} = useCheckout();

    const [paymentMethod , setPaymentMethod] = useState('');
    
      if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography color='red'>{error}</Typography>
  return (
    <Box>
   <TableContainer>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map((item)=>
                  <TableRow key={item.id}>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell>{item.price}$</TableCell>
                    <TableCell>
                      <Box sx={{display:'flex' , alignItems:'center'}}>
                        
                        <Typography>{item.count}</Typography>
                        
                      </Box>
                    </TableCell>

                    <TableCell>{item.totalPrice}$</TableCell>
                   
                    
                  </TableRow>
            )}
            <TableRow>

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>


    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={paymentMethod}
    label="Payment"
    onChange={(e)=>setPaymentMethod(e.target.value)}
  
  >
    <MenuItem value={'Cash'}>Cash</MenuItem>
    <MenuItem value={'Visa'}>Visa</MenuItem>
    
  </Select>
</FormControl>



<Button variant='contained' color='success' onClick={()=> checkOut({paymentMethod})}>Pay Now</Button>
      </Box>

  )
}
