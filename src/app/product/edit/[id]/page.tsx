"use client"
import { useSingleProductQuery, useUpdateProductMutation } from "@/redux/API/baseApi"; 
import { Button, Input, message } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const EditProduct = ({ params }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: product, error: productError } = useSingleProductQuery(params.id);
  const [updateProduct] = useUpdateProductMutation();
  const [variants, setVariants] = useState([{ color: "", specification: "", size: "" }]);

  useEffect(() => {
    if (product) {
      setProductData(product.data);
      setVariants(product.data.variants);
      setLoading(false);
    }
    if (productError) {
      setError(productError);
      setLoading(false);
    }
  }, [product, productError, params]);

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index] = { ...updatedVariants[index], [field]: value };
    setVariants(updatedVariants);
  };

  const addVariant = () => {
    setVariants([...variants, { color: "", specification: "", size: "" }]);
  };

  const removeVariant = (index) => {
    setVariants((prevVariants) => prevVariants.filter((_, i) => i !== index));
  };

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    try {
      const { name, brand, type, origin } = productData;
      const data = { name, brand, type, origin, variants };
      console.log(data)
      const response = await updateProduct({ data, id: params.id });
      if (response) {
        message.success("Product updated successfully");
      }
    } catch (error) {
      message.error("Failed to update product");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <form onSubmit={handleProductUpdate}>
      <div className='m-7 border p-5 rounded-md shadow-md'>
        <div className='grid grid-cols-1'>
          <div className='grid grid-cols-1'>
            <div className='text-center m-2'>
              <h1 className='text-2xl font-bold font-serif'>Edit Product</h1>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <Input name="name" placeholder='Name' value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
              <Input name="brand" placeholder='Brand' value={productData.brand} onChange={(e) => setProductData({ ...productData, brand: e.target.value })} />
              <Input name="type" placeholder='Type' value={productData.type} onChange={(e) => setProductData({ ...productData, type: e.target.value })} />
              <Input name="origin" placeholder='Origin' value={productData.origin} onChange={(e) => setProductData({ ...productData, origin: e.target.value })} />
            </div>
          </div>
          <div className='grid grid-cols-1 items-center content-center'>
            <div className='text-center m-2'>
              <h1 className='text-2xl font-bold font-serif'>Variants</h1>
            </div>
            {variants?.map((variant, index) => (
              <div key={index} className='grid grid-cols-4 gap-3 m-3'>
                <Input
                  name={`color-${index}`}
                  placeholder='Color'
                  value={variant.color}
                  onChange={(e) => handleVariantChange(index, "color", e.target.value)}
                />
                <Input
                  name={`specification-${index}`}
                  placeholder='Specification'
                  value={variant.specification}
                  onChange={(e) => handleVariantChange(index, "specification", e.target.value)}
                />
                <Input
                  name={`size-${index}`}
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
            <Button type="primary" htmlType="submit">Update</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProduct;
