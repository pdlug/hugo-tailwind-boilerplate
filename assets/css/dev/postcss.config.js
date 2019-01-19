module.exports = {
  plugins: [
    require('tailwindcss')(`${__dirname}/../tailwind.js`),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true
      },
      autoprefixer: {
        grid: true
      }
    }),
  ],
}
