/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { useActivePromoBanners } from "~/lib/fetcher";
import Image from "next/image";

const CarouselWithNav = () => {
  const [currentImages, setImages] = React.useState([]);
  const [currentImages2, setImages2] = React.useState([]);
  const slideRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const data = async () => {
      const fetching = await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/api/banners/type/home-promo`,
      );
      const resp = await fetching.json();
      const imgSrcDesk = resp.data.map((val: any) => val.image);
      const imgSrcMob = resp.data.map((val: any) => val.image_mobile);
      setImages(imgSrcDesk[0]);
      setImages2(imgSrcMob[0]);
    };
    data();
  }, []);

  const { data: desktopPromos, loading, error }: any = useActivePromoBanners();
  if (error || desktopPromos?.length === 0)
    return <span className="sr-only">empty data</span>;
  if (loading || desktopPromos == "undefined")
    return <h1 className="animate-bounce">Loading...</h1>;

  const bannerDesktop = desktopPromos?.data;
  const deskBanner = bannerDesktop?.map((val: any) => val.image);
  const mobileBanner = bannerDesktop?.map((val: any) => val.image_mobile);

  const IndexData = deskBanner?.indexOf(currentImages);

  const handleNext = (dataprops: any) => {
    const nextImg = (IndexData + 1) % dataprops.length;
    setImages(deskBanner && deskBanner[nextImg]);
    setImages2(mobileBanner && mobileBanner[nextImg]);
    // console.log(slideRef.current?.classList.add("black"));
  };

  const handlePrev = (dataprops: any) => {
    const prevImg = (IndexData + dataprops.length - 1) % dataprops.length;
    setImages(dataprops[prevImg]);
    setImages2(dataprops[prevImg]);
  };

  return (
    <>
      <div className="hidden md:block relative">
        <div className="" ref={slideRef}>
          {/* <ImagesDeskSlider
            srcdata={currentImages}
            altText={`${currentImages}`}
          /> */}
          <div className="w-full">
            <figure className="relative">
              {deskBanner.length > 0 && (
                <Image
                  alt={`${currentImages}`}
                  // blurDataURL={`/_next/image?url=${currentImages}&w=16&q=1`}
                  className="rounded-xl"
                  height="570"
                  // placeholder="blur"
                  src={`${currentImages}`}
                  width="1264"
                />
              )}

              {/* <img
                alt={`${currentImages}`}
                className="rounded-xl"
                height="570"
                src={`${currentImages}`}
                width="1264"
              /> */}
            </figure>
          </div>
        </div>
        <button
          aria-label="carousel-prev"
          className="absolute transform -translate-x-1/2 bottom-1/2 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light"
          onClick={() => handlePrev(deskBanner)}
        >
          <ArrowLeftIcon aria-hidden="true" className="h-6 w-6" />
        </button>

        <button
          aria-label="carousel-next"
          className="absolute transform translate-x-1/2 bottom-1/2 right-0 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light"
          onClick={() => handleNext(deskBanner)}
        >
          <ArrowRightIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      {/* mobile */}
      <div className="block md:hidden relative">
        <div className="w-full" ref={slideRef}>
          <figure className="relative aspect-1">
            {/* <img
              alt={`${currentImages2}`}
              className="rounded-xl"
              height="250"
              src={`${currentImages2}`}
              width="334"
            /> */}
            {deskBanner.length > 0 && (
              <Image
                alt={`${currentImages2}`}
                // blurDataURL={`/_next/image?url=${currentImages2}&w=16&`}
                height="410"
                // placeholder="blur"
                src={`${currentImages2}`}
                width="410"
              />
            )}
          </figure>
        </div>
        <button
          aria-label="carousel-prev"
          className="absolute transform -translate-x-1/2 bottom-1/2 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light"
          onClick={() => handlePrev(mobileBanner)}
        >
          <ArrowLeftIcon aria-hidden="true" className="h-6 w-6" />
        </button>

        <button
          aria-label="carousel-next"
          className="absolute transform translate-x-1/2 bottom-1/2 right-0 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light"
          onClick={() => handleNext(mobileBanner)}
        >
          <ArrowRightIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      {/* <div className="my-[40px] flex-none hidden md:flex justify-between gap-4">
        <Progress />
      </div> */}
    </>
  );
};

export default CarouselWithNav;
