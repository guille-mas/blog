module.exports = {
  siteMetadata: {
    title: `Cloud Software Design & Development`,
    description: `Thoughts on software design, infrastructure as code, webapps, software development, industry best practices and devops processes from a developers point of view`,
    author: `Guillermo Maschwitz <guilledevel@gmail.com>`,
    // Used for social links in the root footer
    social: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/guillermomas/`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/guille-mas`,
      },
      {
        name: `DockerHub`,
        url: `https://hub.docker.com/u/guillermomaschwitz`,
      },
      {
        name: `StackOverflow`,
        url: `https://stackoverflow.com/users/1607360/guillermo-maschwitz`,
      },
    ],
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
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true
          }
        }
      }
    }
  ]
}
