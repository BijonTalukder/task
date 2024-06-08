"use client"
import React, { useState } from 'react'
import { DatePicker, Input } from 'antd';
import TableUi from '@/components/TableUi/TableUi';
import { useProductListQuery } from '@/redux/API/baseApi';
import dayjs from "dayjs";
const ProductPage = () => {
    const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
    const query: Record<string, any> = {};

    query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["search"] = searchTerm;
//   query["sortOrder"] = sortOrder;
    const {data,isLoading} = useProductListQuery({ ...query })
    // "brand": "Rolfson, Runolfsson and Bergstrom",
    //     "type": "Mug",
    //     "origin": "Indonesia",
    //     "created_at": "2024-06-06T08:45:37.000000Z",
    //     "updated_at": "2024-06-06T08:45:37.000000Z"
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

    ]
    const product = data?.data?.data
    console.log(data)
  return (
    <div>
        <div>
        <Input
          type="text"
          size="large"
          placeholder="Search..."
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
        totalPages={data?.total}
        showSizeChanger={true}
        // onPaginationChange={onPaginationChange}
        // onTableChange={onTableChange}
        showPagination={true}
      />

    </div>
  )
}

export default ProductPage