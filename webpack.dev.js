const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: { 
    path: path.join(__dirname, "build"), 
    filename: "index.bundle.js",
    publicPath: "/"
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { 
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"] 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new Dotenv({
      path: './environment/.env.dev',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};