const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let externals = [
  {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
    },
  },
];
const plugins = [
  new VueLoaderPlugin(),
  // new BundleAnalyzerPlugin(),
];

const entry = path.resolve(__dirname, "../packages/hefeng-ui/index.ts");

const config = {
  mode: "production",
  entry,
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "umd",
    library: "HUI",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  externals,
  plugins,
};

module.exports = config;
