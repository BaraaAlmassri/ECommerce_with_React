import React, { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import axios from 'axios';
import useCart from '../../hooks/useCart';

export default function Cart() {
 

  const {data , isLoading , isError , error} = useCart();


  


  return (
    <div>
        
        </div>
  )
}
