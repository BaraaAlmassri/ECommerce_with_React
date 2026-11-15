import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useRemoveItemFCart() {
    const queryClient = useQueryClient();
    const removeItemCart = async (productId)=>{
            const response = await authAxiosInstance.delete(`Carts/${productId}`)
    }
  return useMutation (
    {
       mutationFn : removeItemCart,
       onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey:['cart']})
       }
    }
  )
}
