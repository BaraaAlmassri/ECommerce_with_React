import React, { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import axios from 'axios';
import useCart from '../../hooks/useCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import Button from '@mui/material/Button';
import { useAuthStore } from '../../store/useAuthStore';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartQty from '../../hooks/useUpdateCartQty';
import useClearCart from '../../hooks/useClearCart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
     

 const navigate = useNavigate();

  const {mutate:removeItem,isPending} = useRemoveFromCart();
  const {mutate:updateQty,isPending:updateQtyPending} = useUpdateCartQty();
  const {mutate:clearCart , isPending:clearPending}= useClearCart();

  const {data , isLoading , isError , error} = useCart();

  const handleUpdate = (productId , actios)=>{
    const item = data.items.find(i=> i.productId==productId);
    if (actios == '+'){
       updateQty({productId,count:item.count+1})
       
    }else {
      if(item.count == 1 ){
        removeItem(productId);
      } 
      else{
      updateQty({productId,count:item.count-1})
      }
    }
        
  }

  if(isLoading) return <CircularProgress></CircularProgress>
  if(isError) return <Typography>{error}</Typography>

    console.log(data);

    
  return (
   <Box component='section' className='carts'>
      <Typography variant='h1'>Cart</Typography>
      {data?.items.length > 0 && <Button variant='outlined' color='error' onClick={()=> clearCart()} disabled={clearPending}>Clear</Button>}
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
                    <TableCell>
                      <Box sx={{display:'flex' , alignItems:'center'}}>
                        <IconButton size='small'>
                          <RemoveIcon onClick={()=> handleUpdate(item.productId, '-')}></RemoveIcon>
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton size='small'><AddIcon  onClick= {()=> handleUpdate(item.productId, '+')}></AddIcon></IconButton>
                      </Box>
                    </TableCell>

                    <TableCell>{item.totalPrice}$</TableCell>
                    <TableCell><Button color='error' onClick={()=> removeItem(item.productId)} disabled={isPending}>Delete</Button></TableCell>
                    
                  </TableRow>
            )}
            <TableRow>

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box>
        <Button variant='contained' onClick={()=> navigate('/checkout')}>Process to Checkout</Button>
        <Button variant='contained' onClick={()=> navigate ('/')}>Continue Shopping</Button>
      </Box>
   </Box>
  )
}
