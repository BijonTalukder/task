import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const CreateProduct = () => {
  return (
    <div className='m-7 border p-5 rounded-md shadow-md'>
      <div className='grid grid-cols-1'>
        <div className='grid grid-cols-1'>
          <div className='text-center m-2'>
            {" "}
            <h1 className='text-2xl font-bold font-serif'>Create Product</h1>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <Input name="name" placeholder='Name' />
            <Input name="brand" placeholder='Brand' />
            <Input name="type" placeholder='Type' />
            <Input name="origin" placeholder='Origin' />
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <div className='text-center m-2'>
            {" "}
            <h1 className='text-2xl font-bold font-serif'>Variants</h1>
          </div>
          <div className='grid grid-cols-4 gap-3'>
            <Input placeholder='Color' />
            <Input placeholder='Specification' />
            <Input placeholder='Size' />
            <div className='flex gap-1'>
              <PlusCircleFilled />
              <MinusCircleFilled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
