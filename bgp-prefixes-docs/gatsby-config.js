module.exports = {
  plugins: [
    {
      resolve: `@victoriabernard92/docs-theme`,
      options: {
        publicPath: 'bgp-prefixes',
        contentPath: './src/content/',
      },
    },
  ],
  siteMetadata: {
    title: `BGP Prefixes`,
    description: `Use Cloudflare’s APIs to manage BGP prefixes`,
    author: `@cloudflaredev`,
  },
}
