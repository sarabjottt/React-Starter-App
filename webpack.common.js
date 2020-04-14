const path = require("path");

module.exports = {
  entry: ["./src/index.js", "./src/styles/main.scss"],
  output: {
    filename: "scripts/main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use:{
          loader: "babel-loader",
          options:{
            presets:["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|woff|woff2|eot|ttf|otf|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
          name: "[name].[ext]"
        }
      }
    ]
  }
};
