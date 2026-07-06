import React from 'react'
import useProductDet from '../../hooks/useProductDet'
import { useParams } from 'react-router-dom';
import { Box,  CircularProgress, Typography } from '@mui/material';

export default function ProductDetails() {

     const {id} = useParams();
    const {data,isLoading , isError , error} = useProductDet(id);
     

    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography color='red'>{error}</Typography>
  return (

    <Box>
        <Typography>{data.response.name}</Typography>
        <Typography>{data.response.description}</Typography>
        
    </Box>
  )
}
