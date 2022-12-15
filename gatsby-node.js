const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  pages.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: path.resolve("src/templates/project.js"),
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
