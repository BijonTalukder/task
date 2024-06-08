"use client"
import React, { useState } from 'react'
import { DatePicker, Input, Button, message } from "antd";
import TableUi from "@/components/TableUi/TableUi";
import {
  useDeleteProductMutation,
  useProductListQuery,
} from "@/redux/API/baseApi";
import dayjs from "dayjs";
import Link from "next/link";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const ProductPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query: Record<string, any> = {};
  const [deleProduct] = useDeleteProductMutation();

  query["per_page"] = size;
  query["page"] = page;
  query["search"] = searchTerm;
  const { data, isLoading } = useProductListQuery({ ...query });
  const deleteHandler = async (id: any) => {
    console.log(id);

    try {
      const res = await deleProduct(id);
      if (res) {
        message.success("Product Deleted successfully");
      }
      // console.log(res);
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  const columns = [
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
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={"/"}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type='primary'
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type='primary'
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const product = data?.data?.data;
  console.log(data.data.total);
  return (
    <div>
      <div>
        <Input
          type='text'
          size='large'
          placeholder='Search...'
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <TableUi
        loading={isLoading}
        columns={columns}
        dataSource={product}
        pageSize={size}
        totalPages={data.data.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        showPagination={true}
      />
    </div>
  );
};

export default ProductPage