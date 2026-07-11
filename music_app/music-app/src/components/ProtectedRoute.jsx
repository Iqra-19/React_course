import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){
        return <Navigate to= '/login' replace/>
    }
  
    return (
    <div>
        <Outlet />
    </div>
  )
}
