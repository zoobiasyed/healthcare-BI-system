import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import HeaderAim from './HeaderAim';
export const UserLayout = () => {
  return (
    <>
    <div className="container-New">
      <Sidebar></Sidebar>
      <main className="main-content-New">
        <HeaderAim></HeaderAim>
        <Outlet/>
        </main>
    </div>
    </>
  )
}
