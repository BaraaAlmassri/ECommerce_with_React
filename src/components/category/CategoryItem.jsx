import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CategoryItem({category}) {
  return (
    <Card>
        <CardContent sx={{textAlign:'center'}}>
             <Typography  variant='h4'>{category.name}</Typography>
        </CardContent>
    </Card>
  )
}
