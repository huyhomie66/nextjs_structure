const nextConfig = require("./env.config");
const withTM = require("next-transpile-modules")(["animejs"]);
const WebpackObfuscator = require("webpack-obfuscator");
const withPlugins = require("next-compose-plugins");
const path = require("path");
const css = require("@zeit/next-css");

const webpackConfig = (config) => {
  config.node = {
    fs: "empty",
  };

  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
    exclude: [path.resolve(__dirname, "server/index.js")],
    enforce: "post",
    use: {
      loader: WebpackObfuscator.loader,
      options: {
        limit: 100000,
        name: "[name].[ext]",
        rotateStringArray: true,
      },
    },
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

const config = withTM({
  ...nextConfig,
  webpack: webpackConfig,
  compress: false,
});

module.exports = config;
