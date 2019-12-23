module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind 2 + Emotion / Styled Components`,
    description: `A (reasonably) unopinionated Gatsby starter, including; Tailwind 2`,
    author: `@chrish-d`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
  ],
}
