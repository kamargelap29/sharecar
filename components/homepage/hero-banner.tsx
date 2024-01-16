// import Link from "next/link";
import * as React from "react";
import { SectionPage } from "../ui/section";
// import { VerticalMedsos } from "../ui/vertical-medsos";
import HeroSliderDesktop from "./hero-components/hero-slider-desktop";
import HeroSliderMobile from "./hero-components/hero-slider-mobile";

export const HeroBanner: React.FC = () => {
  return (
    <SectionPage className="flex">
      {/* <VerticalMedsos /> */}
      <HeroSliderDesktop />
      <HeroSliderMobile />
    </SectionPage>
  );
};
