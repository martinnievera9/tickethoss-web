module.exports = {
  siteMetadata: {
    title: `Ticket Hoss`,
    description: `Mobile Pit Pass App`,
    author: `@kartpassapp`,
    image: `src/images/LaunchGraphic.png`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kartpass-web`,
        short_name: `kartpass`,
        start_url: `/`,
        background_color: `#00001F`,
        theme_color: `#00001F`,
        display: `minimal-ui`,
        icon: `src/images/ticketHossLogo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
