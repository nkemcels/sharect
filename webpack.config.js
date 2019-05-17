const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sharect.js",
    library: "Sharect",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        excludes: /(node_modules|docs)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
