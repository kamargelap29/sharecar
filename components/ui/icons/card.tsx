import * as React from "react";
import { ComponentProps } from "react";

export function Card({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      fill={fill}
      height={height}
      viewBox="0 0 48 48"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M38 30C33.58 30 30 33.58 30 38C30 39.5 30.42 40.92 31.16 42.12C32.54 44.44 35.08 46 38 46C40.92 46 43.46 44.44 44.84 42.12C45.58 40.92 46 39.5 46 38C46 33.58 42.42 30 38 30ZM42.14 37.14L37.88 41.08C37.6 41.34 37.22 41.48 36.86 41.48C36.48 41.48 36.1 41.34 35.8 41.04L33.82 39.06C33.24 38.48 33.24 37.52 33.82 36.94C34.4 36.36 35.36 36.36 35.94 36.94L36.9 37.9L40.1 34.94C40.7 34.38 41.66 34.42 42.22 35.02C42.78 35.62 42.74 36.56 42.14 37.14Z"
        fill={fill}
      />
      <path
        d="M44 15.1V16C44 17.1 43.1 18 42 18H6C4.9 18 4 17.1 4 16V15.08C4 10.5 7.7 6.80005 12.28 6.80005H35.7C40.28 6.80005 44 10.52 44 15.1Z"
        fill={fill}
      />
      <path
        d="M4 23V32.92C4 37.5 7.7 41.2 12.28 41.2H24.8C25.96 41.2 26.96 40.22 26.86 39.06C26.58 36 27.56 32.68 30.28 30.04C31.4 28.94 32.78 28.1 34.28 27.62C36.78 26.82 39.2 26.92 41.34 27.64C42.64 28.08 44 27.14 44 25.76V22.98C44 21.88 43.1 20.98 42 20.98H6C4.9 21 4 21.9 4 23ZM16 34.5H12C11.18 34.5 10.5 33.82 10.5 33C10.5 32.18 11.18 31.5 12 31.5H16C16.82 31.5 17.5 32.18 17.5 33C17.5 33.82 16.82 34.5 16 34.5Z"
        fill={fill}
      />
    </svg>
  );
}
