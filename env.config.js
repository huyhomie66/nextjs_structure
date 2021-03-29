require("dotenv").config();

const nextConfig = {
  env: {
    host: process.env.host,
    api: process.env.api,
  },
};

module.exports = nextConfig;
