import * as React from "react";
import Link from "next/link";
// import SectionSeparator from "../layout/section-separator";
import { Youtube, Fb, Twitter, Instagram } from "./icons";
import { SectionPage } from "./section";
import Image from "next/image";
import { useIntl } from "react-intl";

// import { EXAMPLE_PATH } from "../../lib/constants";

const Footer: React.FC = () => {
  const { formatMessage: f } = useIntl();
  const dynamicDate = new Date().getFullYear();
  return (
    <footer className="mt-16 pt-32 w-full gardient relative gardient">
      <svg
        className="absolute -top-2 md:-top-44 lg:-top-60  xl:-top-80 z-10"
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
      <SectionPage className="flex flex-col-reverse mt-0 md:mt-48 xl:mt-0 md:flex-row items-center justify-center px-8 md:px-[88px] gap-4">
        <div className="flex-none md:flex-1">
          <h2 className="text-2xl md:text-[32px] font-semibold text-sc-light text-center md:leading-10 whitespace-pre-line break-words mx-auto max-w-[616px]">
            {f({ id: `Tunggu Apalagi? Download ShareCar Sekarang!` })}
          </h2>

          <div className="flex items-center justify-center gap-4 md:gap-8 my-[60px] ">
            <a
              href="https://apps.apple.com/id/app/share-car-sewa-mobil-online/id1484777097"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="app-store"
                height={48}
                src="/assets/images/app-store.png"
                width={164}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.quantuminventions.sharecar&hl=en&gl=US"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="play-store"
                height={48}
                src="/assets/images/playstore.png"
                width={164}
              />
            </a>
          </div>
        </div>

        <div className="flex-none md:flex justify-center mt-20 md:mt-0 md:flex-1">
          <div className="p-10 md:p-6">
            <Image
              alt="foooter-img"
              height={390}
              src="/assets/images/footer-phone.png"
              width={336}
            />
          </div>
        </div>
      </SectionPage>
      <div className="mx-8 md:mx-[88px] mb-4">
        <span className="sr-only ">Share Car</span>
        <Image
          alt="logo"
          height={48}
          src="/assets/images/logo-sc-light.png"
          width={82}
        />
      </div>
      <SectionPage className="flex-none md:flex items-start justify-start gap-8 px-8 md:px-[88px] space-y-8 md:space-y-0">
        <div className="space-y-4">
          <p className="text-sc-light max-w-[300px] break-words whitespace-pre-line">
            {f({
              id: "share Car adalah aplikasi sewa mobil online lepas kunci mulai dari hitungan jam dan dapat digunakan kapan saja untuk berbagai kebutuhan, baik urusan kantor atau pribadi.",
            })}
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-sc-light text-xl">{f({ id: "bantuan" })}</h1>
          <ul className="text-sc-light">
            <li>
              <Link href={`/cara-kerja-sharecar`}>
                <a>{f({ id: "cara kerja" })}?</a>
              </Link>
            </li>
            <li>
              <Link href={`/kenapa-sharecar`}>
                <a>{f({ id: "kenapa Share Car" })}? </a>
              </Link>
            </li>
            <li>
              <Link href={`/kebijakan-privasi`}>
                <a>{f({ id: "kebijakan privasi" })}</a>
              </Link>
            </li>
            <li>
              <Link href={`/syarat-dan-ketentuan`}>
                <a>{f({ id: "syarat dan ketentuan" })} </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-sc-light text-xl">Menu</h1>
          <ul className="text-sc-light">
            <li>
              <Link href={`/harga`}>
                <a>{f({ id: "harga" })} </a>
              </Link>
            </li>
            <li>
              <Link href={`/lokasi`}>
                <a>{f({ id: "lokasi" })} </a>
              </Link>
            </li>
            <li>
              <Link href={`/promo`}>
                <a>{f({ id: "promo" })} </a>
              </Link>
            </li>
            <li>
              <Link href={`/faq`}>
                <a>{f({ id: "faq" })} </a>
              </Link>
            </li>
            <li>
              <Link href={`/kontak-page`}>
                <a>{f({ id: "kontak" })} </a>
              </Link>
            </li>
            <li>
              <Link href={`/news`}>
                <a>{f({ id: "news" })} </a>
              </Link>
            </li>
            <li>
              <Link href={`/resource`}>
                <a>{f({ id: "resource" })} </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-sc-light text-xl">{f({ id: "media sosial" })}</h1>
          <ul className="flex item-center gap-x-7">
            <li>
              <a
                href="https://www.facebook.com/sharecarid"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {React.createElement(Fb, { width: "24px", height: "24px" })}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ShareCarID"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {React.createElement(Twitter, {
                  width: "24px",
                  height: "24px",
                })}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sharecarid"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {React.createElement(Instagram, {
                  width: "24px",
                  height: "24px",
                })}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/sharecar"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {React.createElement(Youtube, {
                  width: "24px",
                  height: "24px",
                })}
              </a>
            </li>
            {/* <li>
              <a href="#" target="_blank" rel="nofollow noopener noreferrer">
                {React.createElement(Linkedin, {
                  width: "24px",
                  height: "24px",
                })}
              </a>
            </li> */}
          </ul>
        </div>
      </SectionPage>
      <hr className="w-[320px] lg:w-[972px] xl:w-[1290px] mt-8 mx-auto py-[2px] px-1 rounded-full bg-sc-light" />
      <SectionPage className="mx-12 py-10">
        {/* <SectionSeparator /> */}

        <p className="text-center text-sc-light py-4">
          &copy;Copyright {`${dynamicDate}`} PT. Adi Sarana Armada Tbk. All
          Rights Reserved.
        </p>
      </SectionPage>
    </footer>
  );
};

export default Footer;
