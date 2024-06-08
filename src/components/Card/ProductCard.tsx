"use client";
import { addProduct } from "@/redux/featare/Cart/cart.slice";
/* eslint-disable jsx-a11y/alt-text */
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ data }) => {
  const { img, title, desc, rating, price } = data;
  console.log(data, title);

  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartSlice.products);
  const handleItem = (item) => {
    console.log(item);

    dispatch(addProduct(item));
  };
  console.log(cart);

  return (
    <div
      style={{
        margin: "15px",
        padding: "10px",
      }}
    >
      <div
        style={{
          minHeight: "150px",
        }}
        className='card w-96 bg-base-100 shadow-xl'
      >
        <figure className='px-10 pt-10'>
          <Image
            src={img}
            alt={"product"}
            width={200}
            height={200}
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{title}</h2>
          <p>{desc}</p>
          <p>{generateRating(rating)}</p>
          <del className='bg-error'>{parseInt(price) * 2}.00</del>
          <p>{price} Tk</p>
          <div className='card-actions'>
            <button
              onClick={() => handleItem(data)}
              className='btn btn-success'
            >
              Buy Now
            </button>
            {cart?.length}items
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
