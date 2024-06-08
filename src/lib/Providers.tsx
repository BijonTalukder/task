"use client"
import { store } from "@/redux/store";
import { AntdRegistry } from '@ant-design/nextjs-registry'

import React from 'react'
import { Provider } from 'react-redux'

export const Providers = ({children}) => {
  return (
<Provider store={store}>
<AntdRegistry>
    {
        children
    }
      </AntdRegistry>
</Provider>
  )
}
