const environment = process.env.NODE_ENV;
const defaults = {
  productionBrowserSourceMaps: true, // enable source maps in production
  sassOptions: {
    includePaths: ["frontend/styles"],
  },
  webpack: (config) => {
    // config.module.rules.push({
    //   test: /\.(m)\.scss$/,
    //   loader: "sass-loader",
    // })

    // config.module.rules.push({
    //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    //   use: {
    //     loader: "url-loader",
    //     options: {
    //       limit: 100000,
    //       name: "[name].[ext]",
    //     },
    //   },
    // });

    return config;
  },
};

const configs = {
  development: defaults,
  production: defaults,
};

module.exports = environment === "production" ? configs.production : configs.development;
