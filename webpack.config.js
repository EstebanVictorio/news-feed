const path = require("path")
const webpack = require("webpack")
const HWP = require("html-webpack-plugin")

const root = path.resolve(__dirname, "src")

const plugins = [
  new HWP({
    inject: "body",
    filename: "index.html",
    template: "./index.ejs",
    title: "News Feed"
  }),
  new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom"
  })
]

const entry = {
  index: `${root}/index.js`
}

const devServer = {
  contentBase: path.resolve(__dirname, "public"),
  port: process.env.PORT || 3000,
  historyApiFallback: true
}

const moduleConf = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-transform-runtime"]
        }
      }
    }
  ]
}

const resolve = {
  extensions: [".js"],
  alias: {
    utils: `${root}/utils`,
    pages: `${root}/pages`,
    hooks: `${root}/hooks`,
    services: `${root}/services`,
    components: `${root}/components`
  }
}

const output = {
  path: path.resolve(__dirname, "public")
}

const config = {
  entry,
  output,
  resolve,
  plugins,
  devServer,
  module: moduleConf
}

module.exports = config
