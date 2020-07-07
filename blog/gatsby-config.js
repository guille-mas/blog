module.exports = {
  siteMetadata: {
    title: `Cloud Software Design & Development`,
    description: `Thoughts on software design, infrastructure as code, web apps, software development, industry best practices and DevOps processes from a developers point of view`,
    author: `Guillermo Maschwitz <guilledevel@gmail.com>`,
    robots: `User-agent: *`,
    viewport: `width=device-width, initial-scale=1`,
    header: [
      {"cache-control": `public, max-age=0, must-revalidate`}
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: process.env.NODE_ENV === 'development',
          },
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-waves`,
  ],
}
