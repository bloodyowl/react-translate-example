import path from "path"

const config = {
  entry: {
    "index": "./entries/index.js",
    "i18n": "./i18n/index.js",
  },
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          stage: 0,
        },
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].html",
      },
      {
        test: /\.yml$/,
        loader: "file?name=i18n/[path][name].json&context=./i18n/!yaml",
      },
    ],
  }
}


export default config
