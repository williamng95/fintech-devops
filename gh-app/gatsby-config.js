module.exports = {
  pathPrefix: "/fintech-devops",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gh-app",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
