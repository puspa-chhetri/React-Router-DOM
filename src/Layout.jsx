import React from 'react'
import Header from './componetns/Header/Header'
import Footer from './componetns/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
       <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
