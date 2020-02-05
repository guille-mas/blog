const path = require('path')

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'), 
        'node_modules'
      ],
    },
  })
}

exports.onCreatePage = ({ page, actions }, { suffix }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    const oldPage = Object.assign({}, page);
    if(page.path.length > 1 && page.path.charAt(page.path.length-1) == "/") {
      page.path += 'index.html';
    }
    if (page.path !== oldPage.path) {
      deletePage(oldPage);
      createPage(page);
    }
    resolve();
  });
};


