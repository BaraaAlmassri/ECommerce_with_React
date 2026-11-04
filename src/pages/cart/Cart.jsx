import React from 'react'
import useCart from '../../hooks/useCart'
import { useAuthStore } from '../../store/useAuthStore';

export default function Cart() {



    const token = useAuthStore((state)=> state.token)
    const {data , isPending , isError} = useCart();
  return (
    <div>Cart</div>
  )
}
