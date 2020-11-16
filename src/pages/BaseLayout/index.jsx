import React from 'react'
import { Header } from 'shared/components/Header'
import { Sidebar } from 'pages/Sidebar'
import './style.scss'

export const BaseLayout = ({ children }) => {
  return (
    <div className='base-layout'>
      <Header />
      <Sidebar />
      <div className='layout-wrapper'>{children}</div>
    </div>
  )
}
