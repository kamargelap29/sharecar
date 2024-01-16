/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
// import promotionBanners from "~/lib/data/promotion-banner";
// import Image from "next/image";
import fetch from "isomorphic-unfetch";
import { useActiveBanners } from "~/lib/fetcher";
// import Image from "next/image";

const HeroSliderMobile = () => {
  const [currentImagesMobile, setImagesMobile] = React.useState([]);
  const slideRef = React.useRef<HTMLDivElement>(null);

  const { data: mobilePromos, error }: any = useActiveBanners();
  if (error) return <h1>can not fetch the data</h1>;
  const bannerMobile = mobilePromos?.data;
  const imageBanner = bannerMobile?.map((val: any) => val.image_mobile);
  // console.log(bannerMobile);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const data = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/api/banners?active=1`,
      );
      const data = await res.json();
      const imgSrc = data.data.map((val: any) => val.image_mobile);
      setImagesMobile(imgSrc[0]);
    };
    data();
  }, []);

  const IndexData = imageBanner?.indexOf(currentImagesMobile);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const intervalValid = setInterval(() => {
      const gass = (IndexData + 1) % imageBanner?.length;
      imageBanner?.length > 0 && setImagesMobile(imageBanner[gass]);
    }, 5000);
    // handleNext();
    return () => clearInterval(intervalValid);
  }, [currentImagesMobile]);

  return (
    <div className="relative md:hidden w-full mb-16" ref={slideRef}>
      {/* mobile */}
      <figure className="">
        <img
          alt={`${currentImagesMobile}`}
          className="rounded-xl"
          height="250"
          src={`${currentImagesMobile}`}
          width="334"
        />
        {/* <Image
          alt={`${currentImagesMobile}`}
          className="rounded-xl"
          height="250"
          layout="responsive"
          src={`${currentImagesMobile}`}
          width="334"
        /> */}
      </figure>

      {/* mobile */}
      <div className="inline-block absolute bottom-4 left-1/3">
        {imageBanner?.map((val: any, index: number) => (
          <div key={`${index}`} className="inline-flex">
            <button
              className={`${
                currentImagesMobile == val ? "bg-sc-light" : "bg-sc-green"
              } px-2 py-2 w-2 h-2 mx-1 outline-none rounded-full`}
              onClick={() => setImagesMobile(val)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSliderMobile;
