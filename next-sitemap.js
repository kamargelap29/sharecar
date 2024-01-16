/* eslint-disable no-undef */
module.exports = {
  siteUrl: "https://www.sharecar.co.id",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
