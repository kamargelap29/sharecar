/* eslint-disable no-undef */
module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [
    [
      "formatjs",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        ast: true,
      },
    ],
  ],
};
