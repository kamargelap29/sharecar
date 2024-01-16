/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
// import Image from "next/image";
import { useActiveBanners } from "~/lib/fetcher";
import fetch from "isomorphic-unfetch";
import { VerticalMedsos } from "~/components/ui/vertical-medsos";

const HeroSliderDesktop = () => {
  // const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [currentImages, setImages] = React.useState([]);
  const slideRef = React.useRef<HTMLDivElement>(null);

  const { data: desktopPromos, error }: any = useActiveBanners();
  if (error) return <h1>can not fetch the data</h1>;
  const bannerDesktop = desktopPromos?.data;
  const imageBanner = bannerDesktop?.map((val: any) => val.image);
  // console.log(imageBanner);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const data = async () => {
      const url = `${process.env.NEXT_PUBLIC_APIURL}/api/banners/type/home-hero`;
      const fetching = await fetch(url);
      const resp = await fetching.json();
      const imgSrc = resp.data.map((val: any) => val.image);
      setImages(imgSrc[0]);
    };
    data();
  }, []);

  const IndexData = imageBanner?.indexOf(currentImages);
  // console.log(IndexData);

  const autoNext = (event: any): void => {
    setImages(event);
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const intervalValid = setInterval(() => {
      const gass = (IndexData + 1) % imageBanner?.length;
      imageBanner?.length > 0 && setImages(imageBanner[gass]);
    }, 5000);
    // handleNext();
    return () => clearInterval(intervalValid);
  }, [currentImages]);

  return (
    <div className="hidden relative md:flex items-center" ref={slideRef}>
      {/* desktop */}
      <VerticalMedsos />
      <div className="w-full">
        <div className="">
          <figure className="md:mr-4 xl:ml-0 relative">
            {imageBanner?.length > 0 && (
              <img
                alt={`${currentImages}`}
                className="rounded-xl"
                height="570"
                src={`${currentImages}`}
                width="1264"
              />
              // <Image
              //   alt={`${currentImages}`}
              //   className="rounded-xl"
              //   height="570"
              //   src={`${currentImages}`}
              //   width="1264"
              //   layout="responsive"
              // />
            )}
          </figure>
        </div>
      </div>

      {/* desktop */}
      <div className="absolute inset-x-0 left-[45%] bottom-4">
        {imageBanner?.length > 0 &&
          imageBanner?.map((val: any, index: number) => (
            <div key={`${index}`} className="inline-flex">
              <button
                aria-label="next"
                className={`${
                  currentImages == val ? "bg-sc-light" : "bg-sc-green"
                } px-2 py-2 w-5 h-5 mx-1 outline-none rounded-full`}
                onClick={() => autoNext(val)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroSliderDesktop;
