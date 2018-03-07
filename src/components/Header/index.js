import React from 'react'
import Link from 'gatsby-link'
import headerStyles from './styles.module.css'
import logo from '../images/FB_IMG_1513337606507.jpg'
import Img from 'gatsby-image'

const Header = ({ data }) => (
  <div className={headerStyles.wrapper}>
    <div className={headerStyles.container}>
      <div className={headerStyles.siteName}>
        <Link to="/">
          <img src={logo} width="70px" height="70px" alt="logo" />
        </Link>
      </div>

      <div className={headerStyles.menu}>
        <button aria-expanded="false" aria-controls="menu-list">
          <span class="open">☰</span>
          <span class="close">×</span>
          Menu
        </button>
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

export const query = graphql`
  query HeaderImageQuery {
    file(relativePath: { regex: "/GS_Banner/" }) {
      childImageSharp {
        resolutions(width: 70, height: 70) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
