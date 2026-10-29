import React from 'react'
import { UseCategories } from '../../hooks/UseCategories'
import { Alert, Box, Chip, CircularProgress, Typography } from '@mui/material';
import CategoryItem from './CategoryItem';

export default function Categories() {
    const {data , isPending , isError} = UseCategories();

    if (isPending) return <CircularProgress></CircularProgress>
    if (isError) return <Alert severity='error'>Failed to load Categories</Alert>

  return (
    <Box>
         <Typography variant='h5' component={'h2'} sx={{mb:4}}>Categories</Typography> 
         <Box sx={{display:'grid' , gap:2 , gridTemplateColumns:{
          xs:'repeat(2,1fr)',
          sm:'repeat(3,1fr)',
          md:'repeat(4,1fr)'
         }}}>
             {data.map((category)=>
                <CategoryItem key={category.id} category={category}></CategoryItem>
             )}
         </Box>
    </Box>
  )
}
