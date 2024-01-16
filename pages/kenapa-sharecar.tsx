import * as React from "react";
import { infoData } from "~/components/homepage/information";
import { Container } from "~/components/layout";
import { SectionPage } from "~/components/ui";
import { HumanCircle } from "~/components/ui/icons";
import { useIntl } from "react-intl";

const KenapaSharecar = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="z-30">
      <Container>
        <div className="px-0 md:px-[32px] lg:px-[88px] mt-4 lg:mt-28 py-0 md:py-8 space-y-8 capitalize">
          <div className="mb-16">
            <h2 className="text-sc-dark text-center font-semibold text-xl md:text-3xl lg:text-[40px] break-words whitespace-pre-line leading-normal md:leading-[60px] mx-auto max-w-[616px]">
              {f({ id: `keuntungan menggunakan share car` })}
            </h2>
          </div>
          {/* slider version */}
          {/* <div className="flex mt-16 lg:hidden">
            <div className="carousel rounded-box w-[300px] md:w-[568px] mx-auto">
              {infoData.map(({ title, description, icons }) => (
                <SliderBenefit
                  key={`${title}`}
                  title={f({ id: `${title}` })}
                  description={f({ id: `${description}` })}
                  icons={icons}
                />
              ))}
            </div> */}
        </div>
        <div className="fex-none lg:flex items-center gap-8 xl:gap-16">
          <div className="flex-initial justify-center items-center ">
            <figure className="inline-block md:flex justify-center relative w-[300px] md:w-[387px] xl:w-[577px] mx-auto lg:mx-0 ">
              {React.createElement(HumanCircle)}
            </figure>
          </div>
          <div className="relative flex ">
            <div className="grid grid-cols-2 gap-4 md:gap-10 w-full h-full ">
              {infoData.map(({ title, description, icons }) => (
                <div key={`${title}`} className="text-center space-y-4">
                  <figure className="flex items-center justify-center ">
                    {React.createElement(icons, {
                      height: "56px",
                      width: "56px",
                      fill: "#121212",
                    })}
                  </figure>
                  <h3 className="text-[12px] md:text-sm lg:text-md xl:text-2xl font-semibold text-sc-dark capitalize ">
                    {f({ id: `${title}` })}
                  </h3>
                  <hr className="bg-sc-dark p-0.5 rounded-full mx-auto w-8" />
                  <p className="text-sc-dark text-[10px]  md:text-base">
                    {f({ id: `${description}` })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionPage>
  );
};
export default KenapaSharecar;
