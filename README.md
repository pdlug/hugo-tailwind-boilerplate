# Hugo + Tailwind CSS Boilerplate

Boilerplate to make it easy to start new sites with [Hugo](https://gohugo.io/) 
and [Tailwind CSS](https://tailwindcss.com/) via
[PostCSS](https://postcss.org/). [Purgecss](https://www.purgecss.com/) is used
to remove unused CSS in production builds.

## Installation

Install the NPM dependencies and build the javascript once in development mode.

```bash
npm install
npm run webpack:dev
```

## Development

```bash
npm run server
```

Hugo will start its development server on [http://localhost:1313/](http://localhost:1313/)


## Production build

```bash
npm run build
```

This will run webpack to produce production javascript then Hugo will build
static pages and unused CSS will be removed with Purgecss. 

Deploy the contents of `public/` to S3 or another hosting service.
