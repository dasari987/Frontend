import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Features() {
  return (
    <div className='border border-2 border-warning'>
       <ul>
        <li><Link to="Ang">Angular</Link></li>
        <li><Link to="Rea">reaact</Link></li>
        <Outlet></Outlet>
       </ul>
    </div>
  )
}

export default Features
