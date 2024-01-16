import * as React from "react";

type ImagesSliderProps = {
  srcdata: string | undefined;
  altText: string | undefined;
};

export const ImagesDeskSlider = ({ srcdata, altText }: ImagesSliderProps) => {
  return (
    <figure className="">
      <img
        alt={`${altText}`}
        className="transition-transform ease-linear duration-3000 "
        src={srcdata}
      />
    </figure>
  );
};
