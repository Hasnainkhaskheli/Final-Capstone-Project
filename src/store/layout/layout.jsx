import React from 'react'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <HeaderSection />
      <Outlet/>
    </div>
  )
}

export default Layout