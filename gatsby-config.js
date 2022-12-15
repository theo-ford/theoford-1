require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Site Title",
    menuLinks: [
      {
        name: "link",
        link: "/link",
      },
      {
        name: "link",
        link: "/link",
      },
      {
        name: "link",
        link: "/link",
      },
      {
        name: "link",
        link: "/link",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Stencil", "Helvetica Neue LT Pro"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website Name`,
        short_name: `Website Name`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `theoford-1`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          project: require("./src/schemas/project.json"),
          film_lead_project: require("./src/schemas/film_lead_project.json"),
          featured_projects: require("./src/schemas/featured_projects.json"),
          // about: require("./src/schemas/about.json"),
          // category: require("./src/schemas/category.json"),
          // overview: require("./src/schemas/overview.json"),
          // now: require("./src/schemas/now.json"),
        },
        imageImgixParams: {
          auto: "format",
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/global/layout.js`),
      },
    },
  ],
};
