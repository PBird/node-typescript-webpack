const { merge } = require("webpack-merge");
const baseConfig = require("./webpack/webpack.config.base");
const devConfig = require("./webpack/webpack.config.dev");
const prodConfig = require("./webpack/webpack.config.prod");

module.exports = (env) => {
  switch (env.NODE_ENV) {
    case "development":
      return merge(baseConfig, devConfig);
    case "production":
      return merge(baseConfig, prodConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
