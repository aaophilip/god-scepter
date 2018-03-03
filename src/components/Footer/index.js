import React from 'react'
import Link from 'gatsby-link'
import headerStyles from '../Header/styles.module.css'

const Footer = () => (
  <div>
    <div id={headerStyles.footWrap}>
      <p>
        <span>God Scepter © 2018 •</span>
      </p>

      <div id={headerStyles.social}>
        <a>
          <img
            width="20px"
            height="18px"
            src="https://source.unsplash.com/random/100x100"
          />
        </a>

        <a>
          <img
            width="20px"
            height="18px"
            src="https://source.unsplash.com/random/100x100"
          />
        </a>
      
        <a>
          <img
            width="20px"
            height="18px"
            src="https://source.unsplash.com/random/100x100"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
