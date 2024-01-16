/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import * as React from "react";
import CarsProps from "~/types/cars";
import { SectionPage } from "../ui";
import Image from "next/image";
import { useIntl } from "react-intl";
import { ArrowRightIcon } from "@heroicons/react/outline";

interface CarDataProps {
  CarData: CarsProps[];
  carId?: any | undefined;
}

// const CarData: CarDataProps[] = [
//   {
//     title: "All New Avanza",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/All New Avanza.png",
//   },
//   {
//     title: "All New Mitshubishi Xpander",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/All New Mitsubishi Xpander.png",
//   },
//   {
//     title: "Avanza",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/Avanza.png",
//   },
//   {
//     title: "Sienta",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/Sienta.png",
//   },
//   {
//     title: "Xpander",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/Xpander.png",
//   },
// ];

export const SliderCars = ({ CarData, carId }: CarDataProps) => {
  const { formatMessage: f } = useIntl();
  const [, setSlideLeft] = React.useState<number>(0);
  const [, setIsScrolling] = React.useState<boolean>(false);
  const arrowRef = React.useRef<HTMLButtonElement | any>(null);

  // const scroll = (scrollOffset: number) => {
  //   arrowRef.current.scrollLeft += scrollOffset;
  //   // console.log((arrowRef.current.scrollLeft += scrollOffset));
  // };

  const moveLeft = () => {
    const el: any = document.getElementById(`scrollHor`);
    setSlideLeft((el.scrollLeft += 600));
  };

  return (
    <div
      className="carousel carousel-center relative w-full max-w-sm md:max-w-2xl lg:max-w-7xl bg-transparant cursor-pointer"
      id={`scrollHor`}
      onScroll={() => setIsScrolling(true)}
    >
      <button
        className="hidden md:block pl-8 w-fit z-50"
        onClick={moveLeft}
        ref={arrowRef}
      >
        <ArrowRightIcon className="h-12 w-12" />
        <span className="italic text-sm my-8 capitalize">swipe/scroll</span>
      </button>
      {CarData &&
        CarData?.map(({ id, name, attr_seater, price_advertising, image }) => {
          const newCurrency = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(price_advertising);

          return (
            <div key={`${id}`} className="pl-8 carousel-item relative w-fit">
              <div className="">
                <SectionPage className="relative w-full text-center capitalize">
                  {/* <img
                      className="rounded-box"
                      height={218}
                      onClick={() => carId(id)}
                      src={`${image}`}
                      width={326}
                    /> */}
                  <div className="w-full max-w-xs h-fit">
                    <figure className="">
                      <Image
                        height={413}
                        onClick={() => carId(id)}
                        src={`${image}`}
                        width={515}
                      />
                    </figure>
                  </div>

                  <span className="text-sc-dark font-semibold text-xl md:text-2xl">
                    {name}
                  </span>
                  <p className="text-sc-dark font-semibold text-xl">
                    {attr_seater} {f({ id: "kursi" })}
                  </p>
                  <h3 className="text-md whitespace-pre-wrap mt-4">
                    {f({ id: "mulai dari" })}
                    <span className="text-md font-semibold text-sc-dark">{`\n ${newCurrency}/jam`}</span>
                  </h3>
                </SectionPage>
              </div>
            </div>
          );
        })}
    </div>
    // <SectionPage className=" max-w-7xl">
    //   <div className="carousel bg-transparant rounded-box">
    //     {CarData.map(({ src, title, seat, price }) => {
    //       const newCurrency = new Intl.NumberFormat("id-ID", {
    //         style: "currency",
    //         currency: "IDR",
    //       }).format(price);

    //       return (
    //         <div key={`${title}`} className="carousel-item relative w-80">
    //           <div className="mx-0 px-4 flex flex-col items-center justify-center whitespace-pre-wrap break-words">
    //             {/* <figure className="w-48"> */}
    //             {/* </figure> */}
    //             <SectionPage className="w-[304px] text-center relative">
    //               <img src={`${src}`} />
    //               <h3 className="text-sc-dark font-semibold text-xl md:text-2xl">
    //                 {title}
    //               </h3>
    //               <h3 className="text-sc-dark font-semibold text-xl">
    //                 {seat} Seater
    //               </h3>
    //               <h3 className="text-md whitespace-pre-wrap mt-4">
    //                 Mulai Dari{" "}
    //                 <span className="text-md font-semibold text-sc-dark">{`\n ${newCurrency}/jam`}</span>
    //               </h3>
    //               <div className="italic text-sm mt-2">
    //                 <p>*Harga belum termasuk PPN</p>
    //                 <p>*Harga khusus area Jabodetabek</p>
    //               </div>
    //             </SectionPage>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </SectionPage>
  );
};
