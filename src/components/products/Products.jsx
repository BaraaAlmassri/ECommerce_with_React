import React from 'react'
import UseProducts from '../../hooks/UseProducts'
import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import ProductCard from './ProductCard';

export default function Products() {
    
   const {data , isPending , isError} = UseProducts();
   if (isPending) return <CircularProgress></CircularProgress>
   if(isError) return <Alert severity='error'>Failed to load Products</Alert>

  return (
   <>

    <Box>
         <Typography variant='h5' component={'h2'} sx={{mb:4 , mt:4}}>Products</Typography> 
         <Box sx={{display:'grid' , gap:2 , gridTemplateColumns:{
          xs:'repeat(2,1fr)',
          sm:'repeat(3,1fr)',
          md:'repeat(4,1fr)'
         }}}>
             {data.map((product)=>
                <ProductCard key={product.id} product={product} />
             )}
         </Box>
    </Box>
   
   
   </>
  )
}
