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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              "languages": ["js", "jsx", "jsdoc", "sass", "docker", "yaml", "makefile", "markdown", "php", "git", "shell", "json"],
              "theme": "tomorrow",
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
            },
          },
        ],
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
            sourceMap: true,
          },
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: '@awolf81/gatsby-theme-mdx',
      options: {
        /* basePath: '/myCoolStuff' */
        contentPath: 'src/data'
      },
    },
    `gatsby-theme-waves`,
  ],
}
