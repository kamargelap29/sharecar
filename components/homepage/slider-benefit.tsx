import * as React from "react";
import { JsxElement } from "typescript";
// import { Container } from "../layout";

type BenefitProps = {
  title: string;
  description: string;
  icons: React.ComponentType<React.ComponentProps<"svg">>;
  keys?: JsxElement;
};
export const SliderBenefit = ({
  title,
  icons,
  description,
  keys,
}: BenefitProps) => {
  return (
    <div key={`${keys}`} className="carousel-item">
      <div className=" max-w-[320px]">
        <div className="text-center space-y-4">
          <figure className="flex items-center justify-center ">
            {React.createElement(icons, {
              height: "56px",
              width: "56px",
              fill: "#ffff",
            })}
          </figure>
          <h3 className="text-md md:text-xl font-semibold text-sc-light ">
            {title}
          </h3>
          <hr className="bg-sc-light p-0.5 rounded-full w-8 mx-auto" />
          <p className="text-sc-light">{description}</p>
        </div>
      </div>
    </div>
  );
};
