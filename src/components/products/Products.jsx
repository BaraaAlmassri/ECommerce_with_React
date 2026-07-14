import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Products() {


    const {data,isLoading , isError , error } = useProducts();
    const {t} = useTranslation();
    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography color='red'>{error}</Typography>

    console.log(data.response.data);
  return (
    <Box  className='products' component='section'>
        <Typography component='h1'>{t("Products")}</Typography>
            <Grid container spacing={{xs:2 , md:3}} sx={{textAlign:'center'}}>
        {data.response.data.map((product) => 
                 
                    <Grid item size={{xs:12 ,sm:6 , md:4}}> 
                     <Link to={`/product/${product.id}`}  style={{ textDecoration: "none"}}>
                          <Card>
                        <CardMedia component='img'  image={product.image} sx={{width:200 , mb:5}}>
                            
                        </CardMedia>
                        <CardContent>
                            <Typography component='h3' variant='h3' >{product.name}</Typography>
                            <Typography component='span' variant='body1' >${product.price}</Typography>
                           
                        </CardContent>
                      </Card>
                    </Link>
                    </Grid>
                 
        )}
        </Grid>
    </Box>
  )
}
