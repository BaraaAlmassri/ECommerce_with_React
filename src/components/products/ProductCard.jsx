import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <>
     <Card>
        <CardActionArea component={Link} to={`/products/${product.id}`}> 
            <CardMedia component={'img'}  image={product.image}/>
            <CardContent >
                <Typography >{product.name}</Typography>
                <Rating value={product.Rating} readOnly></Rating>
                <Typography variant='h6' color='primary'>${product.price}</Typography>
            </CardContent>
        </CardActionArea>
     </Card>
    
    </>
  )
}
