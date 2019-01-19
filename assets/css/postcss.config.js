class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}

module.exports = {
  plugins: [
    require('tailwindcss')(`${__dirname}/tailwind.js`),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true
      },
      autoprefixer: {
        grid: true
      }
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [`${__dirname}/../../{content,layouts,static}/**/*.html`],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }],
      fontFace: true
    }),
  ],
}
