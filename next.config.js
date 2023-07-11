/** @type {import('next').NextConfig} */

const {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
  bundleServerLibs,
} = require("@stylable/webpack-plugin");

/*
 * single optimizer for NextJS multiple builds
 * in order to sync client/server namespaces
 */
const StylableOptimizer = require("@stylable/optimizer").StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

module.exports = {
  transpilePackages: ["@actionishope/shelley"],
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    /* exclude Stylable files from all other loaders */
    applyWebpackConfigStylableExcludes(config);

    /* causes provided packages to be bundled (not external) */
    // bundleServerLibs(config, new Set(["@actionishope/shelley"], isServer));

    /* add the Stylable plugin to the webpack configuration */
    config.plugins.push(
      new StylableWebpackPlugin({
        stcConfig: true,
        /* let NextJS handle assets */
        filterAssets: () => false,

        /* output CSS to the correct location */
        filename: "static/css/stylable.[contenthash].css",

        /* a shared optimizer instance */
        optimizer: stylableOptimizer,

        /* serve CSS as a bundled asset */
        cssInjection: "css",

        /* attach CSS to every chunk containing a Stylable stylesheet,
                   instead of to entry chunks 
                */
        experimentalAttachCssToContainingChunks: true,
      })
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
