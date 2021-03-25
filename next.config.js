const nextConfig = require("./config");
const withPWA = require("next-pwa");

const pwaConfig = {
  devIndicators: {
    autoPrerender: false,
  },

  pwa: {
    disable: true,
    dest: "pwa",
    register: true,
    scope: "/",
  },
};

const webpackConfig = (config) => {
  config.node = {
    fs: "empty",
  };

  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        limit: 100000,
        name: "[name].[ext]",
      },
    },
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

const config = { ...nextConfig, ...pwaConfig, webpack: webpackConfig };

module.exports = withPWA(config);
