import React from 'react'
import Link from 'gatsby-link'
import headerStyles from '../Header/styles.module.css'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import yt from '../images/yt.png'

const Footer = () => (
  <div>
    <div id={headerStyles.footWrap} style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0
    }}>
      <p>
        <span>God Scepter © 2018</span>
      </p>

      <div id={headerStyles.social}>
        <a href="#">
          <img
            width="32px"
            height="32px"
            src={fb}
          />
        </a>

        <a href="#">
        <img
        width="32px"
        height="32px"
        src={yt}
        />
        </a>

        <a href="#">
          <img
            width="32px"
            height="32px"
            src={ig}
          />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
