import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { SectionPage } from "~/components/ui";

export default function Custom404() {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage>
      <div className="relative before:bg-cover bg-repeat-x bg-white mix-blend-multiply overflow-hidden bg-cityVector max-h-[768px] z-50">
        <div className="flex flex-col items-center justify-center capitalize z-30">
          <h2 className="text-2xl md:text-[40px] px-2 md:px-0 text-center font-semibold text-sc-dark mx-auto max-w-[616px] leading-normal whitespace-pre-wrap capitalize">
            {f({ id: `halaman tidak tersedia` })}
          </h2>
          <p className="paragraph-news mx-8 text-center">
            {f({
              id: `mohon maaf, halaman yang kamu tuju tidak tersedia. Silahkan kembali ke halaman utama.`,
            })}
          </p>

          <Link href="/">
            <a>
              <button
                aria-label="back-homepage"
                className="sc-blue-btn text-sc-light hover:text-sc-dark my-[76px] capitalize"
              >
                {f({ id: `kembali ke halaman utama` })}
              </button>
            </a>
          </Link>
        </div>
        <div className="relative w-full my-[170px] md:my-[91px]">
          <figure className="relative aspect-w-16 aspect-h-5">
            <Image
              alt="404-image"
              // blurDataURL={`/_next/image?url=/assets/images/404.png&w=16&q=1`}
              layout="fill"
              // placeholder="blur"
              src="/assets/images/404.png"
            />
          </figure>
        </div>
      </div>
    </SectionPage>
  );
}
