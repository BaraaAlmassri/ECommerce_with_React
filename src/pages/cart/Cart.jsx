import React from 'react'
import useCart from '../../hooks/useCart'
import { useAuthStore } from '../../store/useAuthStore';
import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { Link, Links } from 'react-router-dom';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';

export default function Cart() {



    const token = useAuthStore((state) => state.token)
    const { data, isPending, isError } = useCart();

    console.log(data);


    if (!token) {
        return (
            <Box sx={{ textAlign: 'center', py: 6 }}>
                <Typography variant='h5'>
                    please login to view your cart
                </Typography>

                <Button component={Link} to="/login" >
                    Login
                </Button>

            </Box>
        )
    }


    if (isPending) {
        return <CircularProgress></CircularProgress>
    }

    if (isError) {
        return <Alert severity='error'>Failed to Load Cart Items</Alert>
    }

    if(data?.items.length == 0 ){
        return(
            <Box>
                <Typography>
                    your cart is empty <Button component={Link} to="/">shop now</Button>
                </Typography>
            </Box>
        )
    }
    return (
        <Box sx={{
            display: "grid", gridTemplateColumns: {
                xs: '1fr', md: '2fr  1fr'

            }, gap: 4
        }}>

            <Box sx={{mt:3}}>
                {data.items.map((item) => (
                    <CartItem item={item} />
               ))}
            </Box>
            <Box sx={{mt:3}}>

                <CartSummary total={data?.cartTotal} />
            </Box>
        </Box>
    )
}
