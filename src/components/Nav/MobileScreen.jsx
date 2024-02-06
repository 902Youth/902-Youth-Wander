import { useState } from "react";
import { Link } from "react-router-dom";
import { List, ArrowLeft } from "@phosphor-icons/react";
import logo from './wander-logo.png'
import "./nav.css";

const MobileScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnClick = () => {
    setShowMenu(true);
  };

  const handleClose = () => {
    setShowMenu(false);
  };
  return (
    <div className="responsive-nav">
      <span className="left-corner">
        <Link to="/902-youth-wander">
          <img
            className="logo"
            src={logo}
            alt="black 902 Youth logo with a green and grey dotted background"
          />
        </Link>
        <h2>902 Youth: Wander</h2>
      </span>
      <List size={32} className="hamburger-menu" onClick={handleOnClick} />
      {showMenu && (
        <section className="responsive-menu">
          <section className="white-bg">
            <span className="arrowIcon">
              <ArrowLeft size={32} onClick={handleClose} />
            </span>
            <Link to="/" onClick={handleClose} style={{ marginTop: "15%", padding: "2%" }}>
              <button className="res-home">Home</button>
            </Link>
            <Link to="/about" onClick={handleClose} style={{ padding: "2%" }}>
              <button className="res-about">About</button>
            </Link>
            <Link to="/resources" onClick={handleClose} style={{ padding: "2%" }}>
              <button className="res-resources">Survival Skills</button>
            </Link>
            <Link to="https://www.902youth.com/wander-events" onClick={handleClose} style={{ padding: "2%" }}>
              <button className="res-events">Events</button>
            </Link>
          </section>
        </section>
      )}
    </div>
  );
};

export default MobileScreen;
