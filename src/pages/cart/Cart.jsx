import React, { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import axios from 'axios';
import useCart from '../../hooks/useCart';
import { useCounterStore } from '../../store/useCounterStore';
import Button from '@mui/material/Button';

export default function Cart() {
 

  const {data , isLoading , isError , error} = useCart();


   const count = useCounterStore((state) => state.counter);
   const inc = useCounterStore((state) => state.increment);
    
  return (
    <div>
            <h1>{count}</h1>
            <button onClick={inc}>+</button>
        </div>
  )
}
