import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import './styles.css'
import img from 'gatsby-image'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="God Scepter Drama Ministry"
      meta={[
        { name: 'description', content: 'We spread the Gospel of Christ through films' },
        { name: 'keywords', content: 'Drama, Impact, Spiritual' }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children() }
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
