/* eslint-disable react/jsx-key */
import * as React from "react";
import { useIntl } from "react-intl";
// import Image from "next/image";
import { SectionPage } from "../ui";
import {
  Card,
  HumanCircle,
  Likes,
  Mendal,
  Percent,
  PhoneUnlimited,
  Tooling,
} from "../ui/icons";
import { SliderBenefit } from "./slider-benefit";

export type InfoProps = {
  title: string;
  description: string;
  icons: React.ComponentType<React.ComponentProps<"svg">>;
}[];

type nyewaProps = {
  id: number;
  desc: string;
}[];

export const infoData: InfoProps = [
  {
    title: "fleksibel bisa digunakan kapanpun",
    description:
      "layanan Share Car tersedia 24 jam. Bisa mulai sewa mobil kapanpun sesuai kebutuhan.",
    icons: PhoneUnlimited,
  },
  {
    title: "penggunaan praktis & gak ribet",
    description:
      "semua proses booking sampai buka-tutup pintu mobil hanya dari smartphone.",
    icons: Likes,
  },
  {
    title: "pembayaran mudah & aman",
    description:
      "cashless. Dengan payment gateway 2C2P, data kartu kredit yang disimpan dijamin aman.",
    icons: Card,
  },
  {
    title: "kondisi mobil yang selalu terawat",
    description:
      "setiap harinya mobil Share Car dibersihkan dan dirawat secara berkala sehingga siap berkendara.",
    icons: Tooling,
  },
  {
    title: "pelayanan terbaik dalam 24 jam",
    description:
      "bantuan pelanggan siap melayani selama 24 jam penuh. Mudah diakses melalui Whatsapp ke nomor +62 812-9555-5927",
    icons: Mendal,
  },
  {
    title: "harga terjamin paling hemat",
    description:
      "promo khusus liburan sampai urusan pekerjaan tersedia setiap bulan.",
    icons: Percent,
  },
];

const caraNyewa: nyewaProps = [
  { id: 0o1, desc: "Pilih lokasi parkir mobil yang terdekat." },
  { id: 0o2, desc: "Booking mobil Share Car yang tersedia lewat aplikasi." },
  {
    id: 0o3,
    desc: "Pilih promo yang tersedia agar sewa mobil kamu menjadi hemat",
  },
  { id: 0o4, desc: "Buka pintu mobil menggunakan aplikasi Share Car" },
];

export const Information = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage>
      <div className="flex justify-center items-center mt-[40px]">
        <div className="relative overflow-hidden gardient my-4">
          {/* svg */}
          <svg
            className="absolute -top-2 md:-top-44 lg:-top-60 xl:-top-80 z-10 overflow-hidden"
            id="eNYC4Rhcl0s1"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 1440 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M0,4.11439h1440v474.62184c-84.13103-78.08007-374.59997-135.65146-720-135.65146s-635.86897,57.57139-720,135.65146L0,4.11439Z"
              fill="#f4f4f4"
              strokeWidth="0"
            />
          </svg>
          <svg
            className="absolute z-10 -bottom-8 lg:-bottom-4  xl:-bottom-52 rotate-180"
            id="eNYC4Rhcl0s1"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 1440 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M0,4.11439h1440v474.62184c-84.13103-78.08007-374.59997-135.65146-720-135.65146s-635.86897,57.57139-720,135.65146L0,4.11439Z"
              fill="#f4f4f4"
              strokeWidth="0"
            />
          </svg>
          {/* ======================== */}
          <div className="px-[32px] lg:px-[88px] mt-28 py-8 lg:py-[141px] space-y-8">
            <div className="mb-11 md:mb-[124px]">
              <h2 className="text-sc-light text-center font-semibold text-xl md:text-3xl lg:text-[40px] break-words whitespace-pre-line leading-normal md:leading-[60px] mx-auto max-w-[616px] capitalize">
                {f({ id: `keuntungan menggunakan share car` })}
              </h2>
            </div>
            {/* slider version */}
            <div className="flex mt-16 lg:hidden">
              <div className="carousel rounded-box w-[300px] md:w-[568px] mx-auto">
                {infoData.map(({ title, description, icons }) => (
                  <SliderBenefit
                    key={`${title}`}
                    description={f({ id: `${description}` })}
                    icons={icons}
                    title={f({ id: `${title}` })}
                  />
                ))}
              </div>
            </div>
            <div className="flex-none md:flex items-center gap-8 xl:gap-16">
              <div className="flex-initial ">
                <figure className="hidden lg:inline-block relative w-[387px] xl:w-[577px]">
                  {React.createElement(HumanCircle)}
                </figure>
              </div>
              <div className="relative flex ">
                <div className="hidden lg:grid grid-cols-2 gap-10 w-full h-full ">
                  {infoData.map(({ title, description, icons }) => (
                    <div key={`${title}`} className="text-center space-y-4">
                      <figure className="flex items-center justify-center ">
                        {React.createElement(icons, {
                          height: "56px",
                          width: "56px",
                          fill: "#ffff",
                        })}
                      </figure>
                      <h3 className="text-sm lg:text-md xl:text-2xl font-semibold text-sc-light capitalize ">
                        {f({ id: `${title}` })}
                      </h3>
                      <hr className="bg-sc-light p-0.5 rounded-full mx-auto w-8 normal-case" />
                      <p className="text-sc-light text-base">
                        {f({ id: `${description}` })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none lg:flex items-center justify-between px-8 md:px-[88px] pb-0 md:pb-[200px] lg:pb-[400px] mb-8 gap-8 mt-0 lg:mt-[115px]">
            <div className="flex-1 space-y-10 mb-16 lg:mb-0">
              <h2 className="text-sc-light text-center lg:text-left font-semibold text-2xl lg:text-[40px] leading-6 md:leading-relaxed capitalize ">
                {f({ id: "langkah mudah pakai share car" })}
              </h2>
              {caraNyewa.map(({ id, desc }) => (
                <div key={`${id}`} className="flex items-center gap-x-4">
                  <span className="text-sc-dark bg-sc-light rounded-full px-5 py-4 text-base xl:text-xl">
                    {`0${id}`}
                  </span>
                  <p className="text-sc-light text-base xl:text-xl">
                    {f({ id: desc })}
                  </p>
                </div>
              ))}
            </div>
            {/* show tiktod when mobile version */}
            <div className="flex-1">
              <div className="w-4xl mb-28 mt-8 md:mb-0 md:mt-0">
                <figure className="aspect-w-16 aspect-h-9">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    src="https://www.youtube.com/embed/J4PabKljwVE"
                    title="YouTube video player"
                  ></iframe>
                  {/* <Image
                  src="/assets/images/footer-phone.png"
                  alt="foto"
                  width={336}
                  height={390}
                /> */}
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};
