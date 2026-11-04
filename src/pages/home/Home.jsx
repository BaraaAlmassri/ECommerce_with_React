import React from 'react'
import Categories from '../../components/category/Categories'
import Products from '../../components/products/Products'
import { useAuthStore } from '../../store/useAuthStore'
import { Alert } from '@mui/material'

export default function Home() {
  const token = useAuthStore((state) => state.token)
  return (
    <>
    {token? <Alert severity='success'> Welcome Back !</Alert> : ''}
    <Categories />
    <Products />
    </>
  )
}
