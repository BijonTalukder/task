"use client"
import { useCreateProductMutation } from "@/redux/API/baseApi";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React, { useState } from "react";

const CreateProduct = () => {
  const [createProduct, { isLoading, error }] = useCreateProductMutation();
  const [variants, setVariants] = useState([
    { color: "", specification: "", size: "" },
  ]);

  const handleProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: e.currentTarget.name.value,
      brand: e.currentTarget.brand.value,
      type: e.currentTarget.type.value,
      origin: e.currentTarget.origin.value,
      variants,
    };
    // const data1=  {
    //   name: "Product A",
    //   brand: "Brand X",
    //   type: "Mug",
    //   origin: "Country Z",
    //   variants: [
    //     {
    //       color: "Red",
    //       specification: "Specification 1",
    //       size: "large"
    //     },
    //     {
    //       color: "Blue",
    //       specification: "Specification 2",
    //       size: "medium"
    //     },
    //     {
    //       color: "Green",
    //       specification: "Specification 3",
    //       size: "small"
    //     }
    //   ]
    // }

    // console.log(data1,"check");

    try {
      const res =await createProduct(data ).unwrap();
      if (res) {
        console.log(res, "check");

        message.success("Product created successfully");
      }
    } catch (error: any) {
      message.error(error?.message);
    }
    console.log(data, "conso", variants.length);
  };

  const handleVariantChange = (index: number, field: string, value: string) => {
    setVariants((prevVariants) =>
      prevVariants.map((variant, i) =>
        i === index ? { ...variant, [field]: value } : variant
      )
    );
  };

  const addVariant = () => {
    setVariants([...variants, { color: "", specification: "", size: "" }]);
  };

  const removeVariant = (index: number) => {
    setVariants((prevVariants) => prevVariants.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleProduct}>
      <div className='m-7 border p-5 rounded-md shadow-md'>
        <div className='grid grid-cols-1'>
          <div className='grid grid-cols-1'>
            <div className='text-center m-2'>
              <h1 className='text-2xl font-bold font-serif'>Create Product</h1>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <Input name="name" placeholder='Name' />
              <Input name="brand" placeholder='Brand' />
              <Input name="type" placeholder='Type' />
              <Input name="origin" placeholder='Origin' />
            </div>
          </div>
          <div className='grid grid-cols-1 items-center content-center'>
            <div className='text-center m-2'>
              <h1 className='text-2xl font-bold font-serif'>Variants</h1>
            </div>
            {variants.map((variant, index) => (
              <div key={index} className='grid grid-cols-4 gap-3 m-3'>
                <Input
                  name="color"
                  placeholder='Color'
                  value={variant.color}
                  onChange={(e) => handleVariantChange(index, "color", e.target.value)}
                />
                <Input
                  name="specification"
                  placeholder='Specification'
                  value={variant.specification}
                  onChange={(e) => handleVariantChange(index, "specification", e.target.value)}
                />
                <Input
                  name="size"
                  placeholder='Size'
                  value={variant.size}
                  onChange={(e) => handleVariantChange(index, "size", e.target.value)}
                />
                <div className='flex gap-1'>
                  <PlusCircleFilled onClick={addVariant} />
                  {variants.length > 1 && (
                    <MinusCircleFilled onClick={() => removeVariant(index)} />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4 content-center w-[20%] ">
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProduct;
