const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      store: path.resolve(__dirname, 'src/store/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|src\/styles)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /src\/styles/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }


    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
