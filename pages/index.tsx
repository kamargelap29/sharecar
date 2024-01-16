/* eslint-disable no-undef */
import * as React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { AboutUs, Information, HeroBanner } from "~/components/homepage";
import { Promos } from "~/components/promo";
import { MapComponent } from "~/components/map-component";
import { TestBanner } from "~/components/homepage/welcome/test-banner";

// import { HomepagePopup } from "~/components/homepage/welcome";
// import { useRouter } from "next/router";
// import dynamic from "next/dynamic";

const meta = {
  title: `Share Car | #pakaiSHARECARaja`,
};

const index = () => {
  // const { locales } = useRouter();
  // console.log(locales);
  // const PopUpBanner = dynamic(
  //   () => import(`~/components/homepage/welcome/homepage-popup`),
  //   {
  //     ssr: false,
  //   },
  // );

  return (
    <>
      <Head>
        <title>ShareCar</title>
      </Head>
      <NextSeo title={meta.title} titleTemplate="%s" />
      {/* <HomepagePopup /> */}
      <HeroBanner />
      <AboutUs />
      <Information />
      <MapComponent />
      <Promos />
      <TestBanner />
    </>
  );
};

export default index;
