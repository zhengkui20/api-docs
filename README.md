# Cloudflare API Documentation

This project contains the static website content for the [Cloudflare API documentation](https://developers.cloudflare.com/api/).

## Install

Ensure you have the the following installed:

- [node](https://nodejs.org/en/download/) version 9

## Preview

To test the content or static gatsby files locally, run:

```
npm run install
npm run start
```
 Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

You can now edit the .md (`/src/content`)files and the HTML files will be autogenerated in `./public`.

# Worker

To test the Worker logic serving these static files (i.e. anything in `./workers-site`), run:

```
npm run worker-start
```

## Build
To build all files to `/public`:
```
npm run build
```

To build all Worker files to `worker-site/dist`:
```
npm run worker-build
```

## Test
To run test of the Workers script, run:

```
npm worker-test
```

## What's inside
1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.


## Publishing

To publish to staging:

```
npm run publish staging
```

# Releasing

Releasing done through CI for whatever is on master. Ask Ashley Williams or Kristian Freeman for questions.

## Contributing

This repo is overseen by the Workers Developer Experience team. Check out our contribution guide at [CONTRIBUTING.md](/CONTRIBUTING.md)!

To contribute to templates see [Template Contributing Guide](content/templates/CONTRIBUTING.md).

To read about converting an existing static site generator to this repo with workers sites see: [./Hugo-gatsby.md] 
