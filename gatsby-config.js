/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      } 
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      } 
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass"

  ],
  siteMetadata: {
    title: 'Les Borkowski',
    description: 'My personal site and portfolio',
    copyright: 'Les Borkowski 2021'
  }
};
