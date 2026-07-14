import React, { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import axios from 'axios';
import useCart from '../../hooks/useCart';

import Button from '@mui/material/Button';
import { useAuthStore } from '../../store/useAuthStore';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

export default function Cart() {
     
  const {mutate:removeItem,isPending} = useRemoveFromCart();

  const {data , isLoading , isError , error} = useCart();

  if(isLoading) return <CircularProgress></CircularProgress>
  if(isError) return <Typography>{error}</Typography>

    console.log(data);

    
  return (
   <Box component='section' className='carts'>
      <Typography variant='h1'>Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map((item)=>
                  <TableRow key={item.id}>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell>{item.price}$</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell>{item.totalPrice}$</TableCell>
                    <TableCell><Button color='error' onClick={()=> removeItem(item.productId)} disabled={isPending}>Delete</Button></TableCell>
                  </TableRow>
            )}
            <TableRow>

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
   </Box>
  )
}
