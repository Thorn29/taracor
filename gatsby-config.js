module.exports = {
  siteMetadata: {
    title: `Taracor`,
    description: `We offer various construction turnkey services in Malta. Electrical, Mechanical and Gypsum Works, Plumbing, Tiling, Plastering & Painting etc. `,
    author: `ThornDesign`,
    menuLinks: [
      {
        name: 'About Us',
        url: '/'
      },
      {
        name: 'Electrical Installations',
        url: '/electrical-installations'
      },
      {
        name: 'Mechanical Installations',
        url: '/mechanical-installations'
      },
      {
        name: 'Plumbing',
        url: '/plumbing'
      },
      {
        name: 'Gypsum Works',
        url: '/gypsum-works'
      },
      {
        name: 'Tiling',
        url: '/tiling'
      },
      {
        name: 'Plastering & Painting',
        url: '/plastering-painting'
      },
      {
        name: 'Contact',
        url: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
