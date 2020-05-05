const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Cloudflare API`,
    description: `Use Cloudflare’s APIs to get the most out of Cloudflare.`,
    author: `@cloudflare`,
  },
  plugins: [
    {
      resolve: `@victoriabernard92/docs-theme`,
      options: {
        publicPath: 'api',
        contentPath: './src/content/',
      },
    },
  ],
}
