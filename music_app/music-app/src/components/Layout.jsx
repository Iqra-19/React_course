import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

export default function Layout( ) {
  
    const [search, setSearch] = useState('');

    return (
    <div className="home">
    
          <Sidebar />
    
          <div className="content">
    
            <Navbar 
              search={search}
              setSearch={setSearch}
            />

            <Outlet context = {{search}} />

          </div>
        </div>
  )
}
