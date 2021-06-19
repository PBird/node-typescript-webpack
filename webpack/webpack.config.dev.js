const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: "**/node_modules",
  },

  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ["yarn run:dev"],
        blocking: false,
        parallel: true,
      },
    }),
  ],
};
