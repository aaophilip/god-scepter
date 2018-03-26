import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.png'

const Header = () => (
  <div className="wrapper">
    <div className="container">
      <div className="siteName">
        <Link to="/">
          <img src={logo} width="70px" height="70px" alt="logo" />
        </Link>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about/">About</Link>
          </li>

          <li>
            <Link to="/events/">Events</Link>
          </li>

          <li>
            <Link to="/gallery/">Gallery</Link>
          </li>

          <li>
            <Link to="/contacts/">Contacts</Link>
          </li>
        </ul>
      </div>

    </div>
  </div>
)

export default Header
