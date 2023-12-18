import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
export default function () {
  return (
    <div>

    <Headers/>
    

    
    <Outlet></Outlet>
      
    </div>
    
  )
}
