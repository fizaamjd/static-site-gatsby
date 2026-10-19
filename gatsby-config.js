module.exports = {
  siteMetadata: { title: "My Gatsby Site", description: "A static generation coursework site", author: "Fiza Amjad" },
  plugins: [
    { resolve: "gatsby-source-filesystem", options: { name: "posts", path: `${__dirname}/src/posts/` } },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet"
  ],
  pathPrefix: "/static-site-gatsby"
};
