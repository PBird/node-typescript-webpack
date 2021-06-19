const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: "./src/app.ts",
  target: "node",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.(jsx?)$/,
      //   exclude: /node_modules/,
      //   use: ["babel-loader"],
      // },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },

      //   {
      //     test: /\.js$/,
      //     enforce: "pre",
      //     use: ["source-map-loader"],
      //   },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".mjs", ".js", ".json", ".ts"],
  },
  externals: [nodeExternals()],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
}
