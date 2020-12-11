import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap";

const Nav = () => {
  return (
    <header>
      <h1>AllSpeak</h1>
      <ul className="nav">
        <li>
          <Link to="/logout">Log In</Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
