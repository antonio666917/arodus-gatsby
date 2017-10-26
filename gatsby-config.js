module.exports = {
  pathPrefix: `/arodus-gastby`,
  siteMetadata: {
    title: `Antonio Rodriguez - Web Developer from Miami, Florida`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
