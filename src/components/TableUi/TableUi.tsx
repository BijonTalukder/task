"use client";
import React from 'react'


import { Table } from "antd";
type TableProps = {
    loading?: boolean;
    columns: any;
    dataSource: any;
    pageSize?: number;
    totalPages?: number;
    showSizeChanger?: boolean;
    onPaginationChange?: (page: number, pageSize: number) => void;
    onTableChange?: (pagination: any, filter: any, sorter: any) => void;
    showPagination?: boolean;
  };
 const TableUi = ({
    loading = false,
    columns,
    dataSource,
    pageSize,
    totalPages,
    showSizeChanger = true,
    onPaginationChange,
    onTableChange,
    showPagination = true,
  }: TableProps) => {
  console.log("from table",columns,dataSource);
  
  return (
    <div>
         <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
    //   pagination={paginationConfig}
    //   onChange={onTableChange}
    />
    </div>
  )
}
export default TableUi