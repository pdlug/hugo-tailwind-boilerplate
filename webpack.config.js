import path from 'path';

export default {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  context: path.join(__dirname, '.'),
  entry: {
    app: './src/js/app.js',
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/',
    filename: 'javascripts/[name].js',
  },

};
