/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import * as React from "react";
import type { AppProps } from "next/app";
import "../styles/index.css";
import { Layout } from "~/components/layout";
// import { initializeGTM } from "~/lib/gtm";
import { DefaultSeo } from "next-seo";
import Meta from "~/components/meta";
// import { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import locale_id from "~/locales/id.json";
import locale_en from "~/locales/en.json";
import { initializeGTM } from "~/lib/gtm";
import Script from "next/script";
import siteConfig from "~/lib/data/site-config";

// type IntlProviderProps = React.ComponentProps<typeof IntlProvider>;
// interface IntlProps {
//   locale: IntlProviderProps["locale"];
//   messages: IntlProviderProps["messages"];
// }
const meta = {
  siteName: siteConfig.site_name,
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
  tagline: siteConfig.tagline,
  description: siteConfig.site_description,
  url: siteConfig.site_url,
};

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { locale } = useRouter();

  React.useEffect(initializeGTM, []);

  const messages: any = {
    id: locale_id,
    en: locale_en,
  };
  // let paths = typeof window !== "undefined" ? window.navigator.language : "";
  // paths != "en-US" ? "id" : locale;

  return (
    <IntlProvider
      defaultLocale={`id`}
      // onError={(err) => {
      //   if (err.code === "MISSING_TRANSLATION") {
      //     console.warn("Missing translation", err.message);
      //     return;
      //   }
      //   throw err;
      // }}
      locale={`${locale}`}
      messages={messages[`${locale}`]}
      onError={() => null}
    >
      <Layout>
        <DefaultSeo
          canonical={`${meta.url}${router.asPath || "/"}`}
          description={meta.description}
          facebook={{ appId: "" }}
          openGraph={{
            type: "website",
            locale: "id",
            title: meta.title,
            description: meta.description,
            site_name: meta.siteName,
            images: [
              {
                url: "/assets/images/logo-sc.png",
                alt: meta.siteName,
                width: 394,
                height: 456,
              },
            ],
          }}
          title={meta.tagline}
          titleTemplate={`%s | ${meta.siteName}`}
        />
        <Script src="https://www.google-analytics.com/analytics.js?id=324436857" />
        <Meta />
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
};
export default MyApp;
