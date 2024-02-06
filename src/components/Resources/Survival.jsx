import React from "react";
import { Link } from "react-router-dom";
import "./survival.css";

const Survival = () => {
  return (
    <div className="survival">
      <span className="sign">
        <h1>Survival Skills</h1>
        <h2>How to Prepare</h2>
      </span>
      <section className="page-links">
        <p>Click the tabs below to view learning material</p>
        <Link to="/first-aid" style={{ textDecoration: "none", color: "black" }}>
          <p className="small-sign">First Aid Kits</p>
        </Link>
        <Link to="/campfire" style={{textDecoration: "none", color: "black"}}>
          <p className="small-sign">Campfire Do's & Dont's</p>
        </Link>
        <Link to="/navigation" style={{textDecoration: "none", color: "black"}}>
          <p className="small-sign">Navigation</p>
        </Link>
        {/* <Link to="" style={{textDecoration: "none", color: "black"}}>
          <p className="small-sign">Sustenance Food & Water</p>
        </Link>
        <Link to="" style={{textDecoration: "none", color: "black"}}>
          <p className="small-sign">Wildlife Encounters</p>
        </Link> */}
      </section>
    </div>
  );
};

export default Survival;
