import React from 'react'
import UseProductDetails from '../../hooks/UseProductDetails'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert, Box, Button, Card, CardContent, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';
import ReviewItem from './ReviewItem';
import useAddToCart from '../../hooks/useAddToCart';
import { useAuthStore } from '../../store/useAuthStore';
import { Slide, toast } from 'react-toastify';

export default function ProductsDetails() {


    const token = useAuthStore((state) => state.token)

    const navigate = useNavigate()

    const { id } = useParams();
    console.log(id);


    const { mutate: addToCart, isPending: addToCartPending } = useAddToCart();
    const { data, isPending, isError } = UseProductDetails(id)
    if (isPending) return <CircularProgress></CircularProgress>
    if (isError) return <Alert severity='error'>Failed to load ProductDetails</Alert>

    console.log(data);

    const inStock = data.quantity > 0;


    const handleAddToCart = () => {
        if (!token) {
            navigate("/login")
            return;
        }

        addToCart(data.id, {
            onSuccess: () => {
                toast.success('Product Added To Cart Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Slide,
                });
            },
            onError: (error) => {
                console.log(error);

            }
        })
    }


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
                    <Button variant='contained' sx={{ mt: 2 }} disabled={!inStock || addToCartPending} onClick={handleAddToCart}>Add to Cart</Button>
                </Box>



            </Box>
            <Divider sx={{ mt: 3, borderBottomWidth: 3 }}></Divider>

            {data.reviews.map((review) =>
                <ReviewItem review={review} />
            )}
        </>
    )
}
