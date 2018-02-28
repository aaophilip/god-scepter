import React from 'react'
import Link from 'gatsby-link'
import headerStyles from './header.module.css'

const Header = () => (
  <div className={headerStyles.nav}>
    <div className={headerStyles.navCon}>
      <h1 className={headerStyles.header1}>
        <Link to="/" className={headerStyles.brand}>
          GOSDAM
        </Link>
      </h1>

      <div className={headerStyles.styleTwo}>
        <ul>
          <li>
            <Link to="/" className={headerStyles.listLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" className={headerStyles.listLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/events/" className={headerStyles.listLink}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/gallery/" className={headerStyles.listLink}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contacts/" className={headerStyles.listLink}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
