require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Site-K2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-catch-links",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'

  
  ],
}
