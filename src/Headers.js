import "./Header.css"
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Headers() {
  return (
    <header className="one">
        <h1>Logo</h1>
    <ul>
        <li>
            <NavLink to="/" > Home </NavLink>
            </li>
        <li>
            <NavLink to="/About"> About </NavLink>
        </li>
        <li>
            <NavLink to="/Textform"> Textform </NavLink>
        </li>
        
    </ul>
</header>
  )
}
