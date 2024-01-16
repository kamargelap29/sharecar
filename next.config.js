/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { transform } = require("@formatjs/ts-transformer");

const nextConfig = withBundleAnalyzer({
  // https://github.com/vercel/next.js/blob/v11.0.1/packages/next/next-server/server/config-shared.ts#L42-L65
  experimental: {
    images: {
      unoptimized: true,
    },
    forceSwcTransforms: true,
    // optimizeCss: true,
    // optimizeImages: true,
    // workerThreads: true,
  },

  future: {
    strictPostcssConfiguration: true,
  },

  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
  },
  // images: {
  //   domains: [
  //     "assets.vercel.com",
  //     "maimedia.sgp1.cdn.digitaloceanspaces.com",
  //     "via.placeholder.com",
  //     "sharecar-api.staging.microad.co.id",
  //     "cms.sharecar.co.id",
  //   ],
  //   formats: ["image/avif", "image/webp"],
  // },

  //https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, { defaultLoaders }) =>
    // { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
    {
      // Important: return the modified config
      config.module.rules.push({
        test: /\.md$/,
        use: [
          defaultLoaders.babel,
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers() {
                return {
                  before: [
                    transform({
                      overrideIdFn: "[sha512:contenthash:base64:6]",
                    }),
                  ],
                };
              },
            },
          },
        ],
      });
      return config;
    },
});

module.exports = nextConfig;
