require("dotenv").config();

module.exports = {
  webpack(config) {
    config.module.rules = config.module.rules.map(rule => {
      if (
        String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
          use: "file-loader",
        }
      }
    
      return rule
    })
    
    // use svgr for svg files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    })

    config.resolve.symlinks = false;

    return config;
  },
  env: {
    API_URL: "http://localhost:1337"
  },
  images: {
    domains: [
      'storage.googleapis.com',
      'images.unsplash.com',
      'localhost'
    ],
  },
 }