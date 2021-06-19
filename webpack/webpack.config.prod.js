const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = {
  mode: "production",
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ["yarn run:prod"],
        blocking: false,
        parallel: true,
      },
    }),
  ],
};
