var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "./res/js/main.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: "css-loader"
          }, {
          loader: "sass-loader"
          }, {
          loader: "postcss-loader"
        }]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin("./res/css/main.css")
  ]
};
