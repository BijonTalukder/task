"use client"
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaOpencart } from 'react-icons/fa'
// import { DrawerPage } from './UI/Drawer/DrawerPage';

function CategoryNav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const cart = useAppSelector((state) => state.cartSlice.products);
  return (
    <>
    {/* <Drawer/> */}
    {/* <DrawerPage isOpen={isOpen} toggleDrawer={toggleDrawer}></DrawerPage> */}
     <div className="hidden lg:block">
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'> 
            
            <Link className='navbar__link relative' href='#'>
                HOME
            </Link>
            <Link className='navbar__link relative' href='#'>
                CATEGORIES
            </Link>
            <Link className='navbar__link relative' href='#'>
                MEN'S
            </Link>
            <Link className='navbar__link relative' href='#'>
                WOMEN'S
            </Link>
            <Link className='navbar__link relative' href='#'>
                JEWELRY
            </Link>
            <Link className='navbar__link relative' href='#'>
                PERFUME
            </Link>
            
            <Link className='navbar__link relative' href='#'>
                HOT OFFERS
            </Link>
            
            <Link className='navbar__link relative' href='#'>
                BLOG
            </Link>
            <div className='flex'>
            < FaOpencart  onClick={toggleDrawer}/>
            {!!cart && cart.length}
          </div>
            </div>
        </div>
    </div>
    
  </>
   
  )
}

export default CategoryNav