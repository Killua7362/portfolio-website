const withMDX = require("@next/mdx")({
  extension: /\.md$/,
});
module.exports = withMDX({
  devIndicator: { buildAcitivity: false },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});