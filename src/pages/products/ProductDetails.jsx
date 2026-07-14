import React from 'react'
import useProductDet from '../../hooks/useProductDet'
import { useParams } from 'react-router-dom';
import { Box,  Button,  CircularProgress, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart'


export default function ProductDetails() {

     const {id} = useParams();
      const {mutate:addToCart} = useAddToCart();
    const {data,isLoading , isError , error} = useProductDet(id);

  
     

    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography color='red'>{error}</Typography>

    console.log(data);
  return (

    <Box>
        <Typography>{data.response.name}</Typography>
        <Typography>{data.response.description}</Typography>
        <Button onClick={()=> {addToCart({ productId: data.response.id, count: 1 })}}>Add to Cart</Button>
    </Box>
  )
}
