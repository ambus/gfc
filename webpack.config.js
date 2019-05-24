var path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  target: "node",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js", ".json"]
  },
  externals: [],
  module: {
    exprContextRegExp: /$^/,
    exprContextCritical: false,
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  output: {
    publicPath: "",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
  }
};
