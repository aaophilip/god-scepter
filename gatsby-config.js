module.exports = {
  siteMetadata: {
    title: 'God Scepter Drama Ministry'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/components/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  pathPrefix: '/src/components/images'
}
