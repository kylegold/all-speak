import React from "react"
import "./style.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <header>
    <h1>AllSpeak</h1>
      <ul className="nav">
        <li>
        <Link to="/signin">Sign In</Link>

        </li>
        <li>
        <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
  </header>
  )
}

export default Nav