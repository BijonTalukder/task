"use client"
import { useSingleProductQuery } from '@/redux/API/baseApi'
import { Input } from 'antd'
import React from 'react'
const ProductView = ({params}) => {
  const {data,isLoading}= useSingleProductQuery(params.id)

  console.log(data);
  
  return (
    <form >
    <div className='m-7 border p-5 rounded-md shadow-md'>
      <div className='grid grid-cols-1'>
        <div className='grid grid-cols-1'>
          <div className='text-center m-2'>
            <h1 className='text-2xl font-bold font-serif'>View Product</h1>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <Input name="name" value={data?.data?.name} placeholder='Name' />
            <Input name="brand"  value={data?.data?.brand} placeholder='Brand' />
            <Input name="type"  value={data?.data?.type} placeholder='Type' />
            <Input name="origin"  value={data?.data?.origin} placeholder='Origin' />
          </div>
        </div>
        <div className='grid grid-cols-1 items-center content-center'>
          <div className='text-center m-2'>
            <h1 className='text-2xl font-bold font-serif'>Variants</h1>
          </div>
          {data?.data?.variants.map((variant) => (
            <div  className='grid grid-cols-4 gap-3 m-3'>
              <Input
                name="color"
                placeholder='Color'
                value={variant?.color}
              
              />
              <Input
                name="specification"
                placeholder='Specification'
                value={variant?.specification}
               />
              <Input
                name="size"
                placeholder='Size'
                value={variant?.size}
               
              />
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  </form>
  )
}

export default ProductView