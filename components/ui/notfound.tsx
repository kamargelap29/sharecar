/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "../layout";
import { HumanCircle } from "./icons";

export const NotFound = ({ contentdata }: { contentdata: string }) => {
  const { formatMessage: f } = useIntl();
  console.log(contentdata);

  return (
    <Container className="z-30 my-14">
      <div className="my-0 animate-bounce mx-auto md:my-16 scale-50 md:scale-100 w-32">
        <figure className="relative aspect-1">
          {React.createElement(HumanCircle)}
        </figure>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="mb-4 text-center flex-1 capitalize max-w-[816px]">
          {/* <h1 className="text-2xl md:text-5xl font-semibold text-sc-dark">
            {`tidak dapat menemukan ${contentdata} yang kamu cari`}
          </h1> */}
          <p className="my-4 paragraph-news">
            {f({
              id: `sepertinya kami tidak bisa menemukan yang kamu cari. Yuk cari lain.`,
            })}
          </p>
        </div>
        <Link href={`/`} passHref>
          <a>
            <button
              aria-label="btn-link"
              className="sc-blue-btn text-sc-light hover:text-sc-blue"
            >
              halaman utama
            </button>
          </a>
        </Link>
      </div>
    </Container>
  );
};
