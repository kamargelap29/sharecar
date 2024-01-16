/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
// import Link from "next/link";
// import { Container } from "../layout";
import { Seat, Suitcase, Transmision } from "../ui/icons";
import { Range } from "../ui";
// import { Seat, Transmision } from "../ui/icons";
import { useIntl } from "react-intl";
// import Image from "next/image";
// import { useCars } from "~/lib/fetcher";
// import data from "~/lib/data/cars.json";

interface calculatorProps {
  seat?: string;
  storage?: string;
  description?: string;
  car_type?: string;
  initialData?: any;
  children?: React.ReactNode;
  promos?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Calculator = ({
  // seat,
  // storage,
  // description,
  initialData,
  children,
}: calculatorProps) => {
  const { formatMessage: f } = useIntl();
  const [rangeData, setRangeData] = React.useState<string>("1");
  const [selectedPromos, setSelectedPromos] = React.useState<number | any>(0);
  // console.log(window.navigator.userAgent);
  // const { data } = useCars();
  // const { price_advertising }: any = initalData[0];
  if (initialData === "undefined") return <h1>loading...</h1>;
  const newCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const basePrice = initialData?.price_base;
  // const nextPrice =
  //   rangeData === "1"
  //     ? basePrice * 0
  //     : initialData?.price_next * (Number(rangeData) - 1);
  // const subTotalPrice = rangeData === "1" ? basePrice : basePrice + nextPrice;
  const nextPrice = initialData?.price_next;
  // new update
  const updateNext = (Number(rangeData) - 1) * nextPrice;
  const subTotalPrice = basePrice + updateNext;
  const promoPrice = (subTotalPrice * selectedPromos) / 100;
  const totalPrice =
    nextPrice === 0 && promoPrice === 0
      ? subTotalPrice
      : subTotalPrice - promoPrice;

  return (
    <div className="flex-none block p-0 md:p-[60px] md:flex justify-between space-y-8 md:space-y-0 h-full gap-8 z-50">
      {/* car information */}
      <div className="flex-1 space-y-4 ">
        <h1 className="text-sc-dark text-2xl md:text-[40px] font-semibold">
          {initialData?.name}
        </h1>
        {/* <p>{description}</p> */}
        <div className="relative">
          {/* <div className="w-full max-w-md h-fit">
            <figure className="aspect-1">
              <Image
                src={`${initialData?.image}`}
                alt={`car-${initialData?.image}`}
                width={515}
                height={413}
                // layout="fill"
              />
            </figure>
          </div> */}
          <figure className="relative aspect-w-4 aspect-h-3">
            <img
              alt="car"
              height={218}
              src={`${initialData?.image}`}
              width={326}
            />
          </figure>
        </div>
        <div className="bg-[#ffff] shadow-lg rounded-full py-6 px-4 text-sc-dark">
          <div className="flex items-center justify-evenly">
            <div className="flex items-center justify-center gap-2">
              {React.createElement(Seat, {
                width: "24px",
                height: "24px",
                fill: "#333333",
              })}
              <span className="text-[10px] md:text-base">
                {initialData?.attr_seater} {f({ id: `kursi` })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {React.createElement(Transmision, {
                width: "24px",
                height: "24px",
                fill: "#333333",
              })}
              <span className="text-[10px] md:text-base">
                {f({ id: `otomatis` })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {initialData?.attr_trunk == null ? null : (
                <>
                  {React.createElement(Suitcase, {
                    width: "24px",
                    height: "24px",
                    fill: "#333333",
                  })}
                  <span className="text-[10px] md:text-base">
                    {`3`} {f({ id: `tas/koper` })}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#ffff] px-3 md:px-[40px] py-6 rounded-3xl shadow-xl my-8 lg:my-0 z-30">
        <div className="">{children}</div>
        <div className="">
          <Range
            className="my-6 tooltip"
            defaultValue={rangeData}
            handleChange={(e) => setRangeData(e.currentTarget.value)}
          />
        </div>
        {/* info harga */}
        <div className="my-[40px] space-y-4">
          <ul className="text-sc-dark space-y-4 capitalize">
            <span className="text-xl font-semibold text-sc-dark ">
              {f({ id: "estimasi harga" })}
            </span>
            <li>
              <div className="flex justify-between">
                <span>{f({ id: "1 jam pertama" })}</span>
                {/* <span>Rp. 1</span> */}
                <span>{`${newCurrency.format(initialData?.price_base)}`}</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>{f({ id: `1 jam berikutnya` })}</span>
                <span>{`${newCurrency.format(nextPrice)}`}</span>

                {/* <span>
                  {rangeData} {f({ id: `jam berikutnya` })}
                </span> */}

                {/* <span>
                  {rangeData == "0"
                    ? "Rp. 0"
                    : `${newCurrency.format(nextPrice)}`}
                </span> */}
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>
                  {f({ id: "sub total" })} {rangeData} {f({ id: "jam" })}
                </span>
                <span>{`${newCurrency.format(subTotalPrice)}`}</span>
              </div>
            </li>
            {/* promo */}
            <ol>
              <span>{f({ id: "promo" })}</span>
              <li>
                <div className="flex justify-between my-4">
                  <input
                    className="text-sc-dark ring-2 ring-sc-blue focus:ring-sc-green focus:outline-none rounded-full p-1 md:p-3 md:w-2/3 w-1/2"
                    max="100"
                    min="0"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSelectedPromos(e.currentTarget.value)
                    }
                    placeholder="promo %"
                    type="number"
                  />
                  <span>{`${newCurrency.format(Math.ceil(promoPrice))}`}</span>
                </div>
              </li>
            </ol>
            {/* total */}
            <li>
              <div className="flex justify-between">
                <span className=" font-semibold text-sc-dark">
                  {f({ id: "total keseluruhan" })}
                </span>
                <span className=" font-semibold text-sc-dark">
                  <span>{`${newCurrency.format(Math.ceil(totalPrice))}`}</span>
                </span>
              </div>
              <span className="text-xs italic">
                *{f({ id: `harga belum termasuk PPN 11%` })}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          {/* <Link href={`/promo`}> */}
          <a
            href={"https://wa.link/3djipt"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              aria-label="promo"
              className="sc-blue-btn text-sc-light text-sm md:text-lg hover:text-sc-blue hover:ring-2 hover:ring-sc-blue  focus:text-sc-light uppercase"
            >
              {f({ id: "pesan sekarang" })}
            </button>
          </a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};
