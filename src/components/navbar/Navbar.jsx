import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';

import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import { Button } from '@mui/material';
export default function Navbar() {

 const {data} = useCart();
 const cartCount = data?.items.length || 0 ; 
  const navigate = useNavigate();
  const {t} = useTranslation();

  const changeLanguage = ()=>{
    const newLanguage = i18n.language =="ar"  ? "en" :"ar";
    i18n.changeLanguage(newLanguage);
  }

    const token = useAuthStore((state)=>state.token);
    const logout = useAuthStore((state)=>state.logout);

    const handlelogout = ()=>{
      logout();
      navigate('/login')
    }

  return (
    <nav>

     <Button onClick={changeLanguage}>
      {i18n.language === "ar"? "EN":"Ar"}
     </Button>
        <Link to="/">{t('Home')}</Link>
        
        <Link to="/products">{t('Products')}</Link>
        {token? <>
        <Link to="/cart">{t('Cart')} {cartCount}</Link>
        <Link to="/login" component="button" onClick={handlelogout}>{t('Logout')}</Link>
        </>  :
        <>
        <Link to="/login">{t('Login')}</Link>
        <Link to="/register">{t('Register')}</Link>
        </>
        }
        
    </nav>
  )
}
