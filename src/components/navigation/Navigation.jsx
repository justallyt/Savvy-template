import React, { useState } from 'react'
import Navbar from './Navbar'
import ScrolledNavbar from './ScrolledNavbar'
import Sidebar from './Sidebar'
import '../../css/home.css'
import { sidebarContext } from '../../contexts/context'

const Navigation = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false)
 
  return (
        <>
            <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
                    <Navbar />
                    <ScrolledNavbar />
                    <Sidebar />
            </sidebarContext.Provider>
        </>
  )
}

export default Navigation