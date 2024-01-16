/* eslint-disable no-undef */
import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "~/utils/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link href="https://sharecar.co.id" hrefLang="id" rel="”alternate”" />
          <link
            href="https://sharecar.co.id/en"
            hrefLang="en-US"
            rel="”alternate”"
          />
          <link
            crossOrigin=""
            href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
            integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
            rel="stylesheet"
          />
          {/* <!-- Google tag (gtag.js) --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          />

          {/* <link
            rel="preload"
            href={`${process.env.NEXT_PUBLIC_APIURL}/api/cars?active=1`}
            as="fetch"
            crossOrigin="anonymous"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
