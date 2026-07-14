import { Category } from '@mui/icons-material';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import React from 'react'
import useCategories from '../../hooks/useCategories';
import { useTranslation } from 'react-i18next';

export default function Categories() {

  const {t} = useTranslation();
        
    const {data,isLoading , isError , error } = useCategories();

    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography color='red'>{error}</Typography>

  return (
    <div>
        {data.response.data.map((category)=> <Box> <Typography>{category.name} </Typography> </Box>)}
        </div>
  )
}
