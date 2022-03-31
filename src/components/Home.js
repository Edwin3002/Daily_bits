import React from 'react'
import { Test } from './Test';
import { NavF } from '../style/app_css';
import Nav from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Test/>
      <NavF>
          <Nav />
      </NavF>
    </div>
  )
}
