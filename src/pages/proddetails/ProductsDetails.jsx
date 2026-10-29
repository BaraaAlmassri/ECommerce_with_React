import React from 'react'
import UseProductDetails from '../../hooks/UseProductDetails'
import { useParams } from 'react-router-dom'
import { Alert, Box, Button, Card, CardContent, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';

export default function ProductsDetails() {

    const { id } = useParams();
    console.log(id);



    const { data, isPending, isError } = UseProductDetails(id)
    if (isPending) return <CircularProgress></CircularProgress>
    if (isError) return <Alert severity='error'>Failed to load ProductDetails</Alert>

    console.log(data);

    const inStock = data.quantity > 0;


    return (
        <>
        <Box sx={{
            display: 'grid', gap: 2, gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr'
            }
        }}>

            <Card>

                <CardMedia component={'img'} image={data.image} sx={{ maxHeight: 400, objectFit: 'contain' }}>

                </CardMedia>


                <CardContent>

                </CardContent>
            </Card>
            <Box>
                <Typography>
                    {data.name}
                </Typography>
                <Rating value={data.rate} readOnly></Rating>
                <Typography variant='h4' color='primary'>${data.price}</Typography>
                <Chip label={inStock ? "InStock" : "OutofStock"} color={inStock > 0 ? "success" : "error"}>

                </Chip>
                <Typography>{data.description}</Typography>
                <Button variant='contained' sx={{mt:2}} disabled={!inStock}>Add to Cart</Button>
            </Box>


               
        </Box>
         <Divider sx={{mt:3 , borderBottomWidth:3 }}></Divider>
         </>
    )
}
