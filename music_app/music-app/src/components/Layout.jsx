import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

export default function Layout( {search, setSearch,  theme, toggleTheme} ) {
  
    return (
    <div className="home">
    
          <Sidebar />
    
          <div className="content">
    
            <Navbar 
              search={search}
              setSearch={setSearch}
               theme={theme}
                toggleTheme={toggleTheme}
            />

            <Outlet context = {{search}} />

          </div>
        </div>
  )
}
