import React from 'react'
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <span className="f-links">
      <Link to='https://www.902youth.com/coming-soon-03'>
      <p>Privacy Policy</p>
      </Link>
      <Link to='/about'>
      <p>About</p>
      </Link>
      <Link to='/resources'>
      <p>Survival Skills</p>
      </Link>
      <a href="https://www.902youth.com/" target="_blank">902 Youth Website</a>
      </span>
      <span className="address">
        <p>186 Alewife Brook Pkwy #1157, Cambridge, MA 02138</p>
        <p>info@902youth.com</p>
        <p>+1 (617) 256-1427</p>
      </span>
      <span className="legal">
        <p>​902 Youth Inc. is a registered 501(c)(3) non-profit organization, officially recognized by the IRS. Our commitment to youth empowerment and inspiring bright futures is reflected in our tax-exempt status. Our Tax ID number is 84-3699886.
        </p>
        <p>©2023 by 902 Youth Inc.</p>
      </span>
    </div>
  )
}

export default Footer