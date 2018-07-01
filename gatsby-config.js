module.exports = {
  siteMetadata: {
    siteUrl: `https://antoniorodriguez.us`,
    title: `Antonio Rodriguez - Web Developer from Miami, Florida`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49026829-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: []
      }
    }
  ]
};
