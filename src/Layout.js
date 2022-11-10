import React from 'react'
import Nav from './HomeNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
        <Nav />
        <Outlet />
    </div>
  )
}

export default Layout