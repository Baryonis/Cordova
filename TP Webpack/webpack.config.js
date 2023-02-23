const HtmlWebpackPlugin = require("html-webpack-plugin");

const options = {
  mode: process.env.NODE_ENV,
  entry: __dirname + "/src/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: __dirname + "/src/index.html" })],
};

module.exports = options;
