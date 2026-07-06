import React, { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import axios from 'axios';
import useCart from '../../hooks/useCart';

import Button from '@mui/material/Button';
import { useAuthStore } from '../../store/useAuthStore';

export default function Cart() {
     
  const Token = useAuthStore((state)=> state.token)
  console.log(Token);

  const {data , isLoading , isError , error} = useCart();



    
  return (
    <div>
            <h1>Cart</h1>
        </div>
  )
}
