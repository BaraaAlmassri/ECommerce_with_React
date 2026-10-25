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
         <Typography variant='h4' component={'h2'}>Categories</Typography> 
         <Box sx={{display:'flex' , flexWrap:'wrap' , gap:1}}>
             {data.map((category)=>
                <CategoryItem key={category.id} category={category}></CategoryItem>
             )}
         </Box>
    </Box>
  )
}
