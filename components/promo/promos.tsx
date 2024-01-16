import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "../layout";
import { SectionPage } from "../ui";
import CarouselWithNav from "../ui/carousel";

export const Promos: React.FC = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="flex flex-col items-center justify-center px-8 md:px-[88px] mt-10 lg:mt-[120px] z-30">
      <Container>
        <h2 className=" text-center text-2xl md:text-[40px] text-sc-dark font-semibold leading-normal md:leading-10">
          {f({ id: "Promo Menarik Dari Kami" })}
        </h2>
      </Container>
      <SectionPage className="my-[30px] md:my-16">
        <CarouselWithNav />
      </SectionPage>
      <Container className="my-[30px]">
        <Link href={`/promo`}>
          <a>
            <button
              aria-label="promo"
              className="sc-light-btn hover:text-sc-light text-sc-blue uppercase"
            >
              {f({ id: "lihat promo lainnya" })}
            </button>
          </a>
        </Link>
      </Container>
    </SectionPage>
  );
};
