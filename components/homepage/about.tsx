import * as React from "react";
import { Human, Car } from "../ui/icons";
import { SectionPage } from "../ui";
import Link from "next/link";
import { useIntl } from "react-intl";

export const AboutUs = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="pl-0 md:pl-[88px]">
      <div className="flex-none md:flex md:items-stretch gap-[93px]">
        <div className="px-8 md:pl-8 flex-1 self-center space-y-4">
          <h2 className="text-2xl font-semibold text-sc-dark">
            {f({ id: "Sewa mobil instan bisa hitungan jam." })}
          </h2>
          <p className="break-before-colum break-words whitespace-pre-line">
            {f({
              id: "Share car sewa mobil lepas kunci yang terdapat di jakarta & bali. Dengan durasi mulai dari 1 jam hingga 72 jam share car fleksibel untuk berbagai kebutuhan. dari mulai urusan kantor sampai liburan bersama keluarga, share car siap menjadi andalan.",
            })}
          </p>
          <Link href={`/harga`}>
            <a>
              <button
                aria-label="cek-kendaraan"
                className="sc-blue-btn my-6 text-sc-light hover:text-sc-blue uppercase"
              >
                cek kendaraan
              </button>
            </a>
          </Link>
          <h3 className="text-sc-green font-medium md:font-semibold text-xl md:text-[32px]">
            #pakaiSHARECARaja
          </h3>
        </div>

        <div className="flex-none md:flex-1 self-end justify-between overflow-hidden">
          <div className="bg-repeat h-[700px] bg-cover bg-left bg-cityVector">
            <div className="relative ">
              <div className="absolute translate-y-1/4 inset-x-0 z-50 mt-24">
                <div className="">
                  {React.createElement(Human, {
                    width: "187px",
                    height: "498px",
                  })}
                </div>
              </div>
              <div className="absolute translate-y-3/4 inset-x-0 mt-12">
                <div className="">
                  {React.createElement(Car, {
                    width: "966px",
                    height: "364px",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};
