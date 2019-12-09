/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadate: {
    title: 'tutorial',
    description: 'just some description about our side',
    author: '@tahara',
    data: ['item1', 'item2', 'item3']
  },
  plugins: [
    `gatsby-plugin-sass`,`gatsby-plugin-styled-components`
  ],
}
