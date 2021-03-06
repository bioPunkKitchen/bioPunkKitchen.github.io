module.exports = {
  siteMetadata: {
    title: `bioPunk.kitchen`,
    description: `Biologiewertstatt und Küchenatelier für Bioökonomie in Potsdam`,
    author: `@bioPunk.kitchen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `biopunk.kitchen`,
        short_name: `biopunk.kitchen`,
        start_url: `/`,
        background_color: `#9c9c9c`,
        theme_color: `#9c9c9c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site. // TODO
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
