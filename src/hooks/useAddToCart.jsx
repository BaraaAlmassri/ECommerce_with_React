import axios from 'axios'
import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useMutation } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useAddToCart() {
   
 const addToCart = async(productId)=>{
    const response = await authAxiosInstance.post(`/Carts` , {ProductId: productId , Count :1})
  
      return response.data;
 }

return useMutation ({
    mutationFn:addToCart,
})


}
