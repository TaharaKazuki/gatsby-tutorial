import React from 'react'
import Navbar from '../components/Navbar'
import './layout.css'

const Layout = ({children}) => (
  <>
    <Navbar />
    <main>
      {children}
    </main>
  </>
)

export default Layout