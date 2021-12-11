module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.jonbalon.com',
    title: 'Jon Balon - Modern JavaScript Developer',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          _src: 'src',
          _fonts: 'src/fonts',
          _components: 'src/components',
          _images: 'src/images',
          _pages: 'src/pages',
          _styles: 'src/styles',
        },
        extensions: ['js'],
      },
    },
  ],
};
