const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
;

module.exports = (env) => {
  return {
    mode: env.mode??'development',
    entry: [ "@babel/polyfill", path.resolve(__dirname, "src", "index.js")],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: '[name][contenthash].css'
      }),
    ],

    module: {
      rules: [
        {
          test: /\.ttf?$/i,
          type:'asset/resource',
          generator:{
            filename:'fonts/[name].[ext]',
          }
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.scss$/i,
          use: ["style-loader","css-loader", "sass-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        }
      ],
    },
  };
};
