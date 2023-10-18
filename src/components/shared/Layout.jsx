import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
  return (
    <div className='flex flex-row bg-indigo-50 h-screen w-screen' >
      <Sidebar />
      <div className="flex-1 px-1.5 overflow-y-auto overflow-x-hidden scroll-smooth ">
        <Header />

        <div className='p-4' >{<Outlet />}</div>
      </div>
      
    </div>
  )
}

export default Layout