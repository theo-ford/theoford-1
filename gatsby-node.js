const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectPages = await graphql(`
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

  projectPages.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: path.resolve("src/templates/project.js"),
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const filmProjectPages = await graphql(`
    {
      allPrismicFilmLeadProject {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  filmProjectPages.data.allPrismicFilmLeadProject.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: path.resolve("src/templates/film_lead_project.js"),
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const projectPageDesktop = await graphql(`
    {
      allPrismicProjectDesktop {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  projectPageDesktop.data.allPrismicProjectDesktop.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: path.resolve("src/templates/project_desktop.js"),
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
