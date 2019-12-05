import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
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