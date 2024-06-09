"use client";
import React, { useState, useEffect } from "react";
import { Input, Button, message, Checkbox, Table } from "antd";
import { useRouter } from "next/navigation";
import { useProductListQuery } from "@/redux/API/baseApi";
import dayjs from "dayjs";

const CreateOrder = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const router = useRouter();

  const query: Record<string, any> = {
    per_page: size,
    page,
    search: searchTerm,
  };

  const { data, isLoading } = useProductListQuery(query);

  useEffect(() => {
    setSelectedProducts([]);
  }, [page, size]);

  const handleProductSelection = (product: any) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.some((p) => p.id === product.id)) {
        return prevSelected.filter((p) => p.id !== product.id);
      } else {
        return [...prevSelected, product];
      }
    });
  };

  const columns = [
    {
      title: "Select",
      dataIndex: "select",
      render: (_: any, record: any) => (
        <Checkbox
          checked={selectedProducts.some((p) => p.id === record.id)}
          onChange={() => handleProductSelection(record)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Origin",
      dataIndex: "origin",
    },
    {
      title: "Created Date",
      dataIndex: "created_at",
      render: (data: any) => dayjs(data).format("MMM D, YYYY hh:mm A"),
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const handleNext = () => {
    const selectedIds = selectedProducts.map((product) => product.id);
    router.push({
      pathname: "/create-order-variant",
      query: { selectedProducts: JSON.stringify(selectedIds) },
    });
  };
  const product = data?.data?.data;

  return (
    <div>
      <div>
        <div>
          <Input
            type='text'
            size='large'
            placeholder='Search...'
            style={{ width: "20%" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={product}
          pagination={{
            current: page,
            pageSize: size,
            total: data?.data?.total,
            showSizeChanger: true,
            onChange: onPaginationChange,
          }}
          rowKey='id'
        />
      </div>
      <div className='submit-group' style={{ marginTop: "20px" }}>
        <Button
          type='primary'
          className='mr-2'
          onClick={() => setSelectedProducts([])}
        >
          Cancel
        </Button>
        <Button type='primary' className='mr-2' onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default CreateOrder;
