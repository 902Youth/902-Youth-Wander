import React from 'react'
import { Link } from "react-router-dom";
import logo from './wander-logo.png'
import "./nav.css";


const RegScreen = () => {
  return (
    <div className="navigation">
    <span className="left-corner">
      <Link to="/902-Youth-Wander">
        <img
          className="logo"
          src={logo}
          alt="black 902 Youth logo with a green and grey dotted background"
        />
      </Link>
      <h2>902 Youth: Wander</h2>
    </span>
    <span className="buttons">
      <Link to="/about" style={{ padding: "2%" }}>
        <button className="about">About</button>
      </Link>
      <Link to="/resources" style={{ padding: "2%" }}>
        <button className="resources">Survival Skills</button>
      </Link>
      <Link to="https://www.902youth.com/wander-events" style={{ padding: "2%" }}>
        <button className="events">Events</button>
      </Link>
    </span>
  </div>
  )
}

export default RegScreen