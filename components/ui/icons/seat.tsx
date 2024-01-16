import * as React from "react";
import { ComponentProps } from "react";

export function Seat({
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
        d="M14 36C14 36 8 20 8 12C8 4 12 4 12 4H14C14 4 16 4 16 6C16 8 14 8 14 12C14 16 20 20 20 26C20 32 14 36 14 36ZM24 34C22 34 16 39 16 39C15.4 39.4 15.6 40 16 40.6C16 40.6 18 44.2 22 44.2H34C36.2 44.2 38 42.4 38 40.2V38.2C38 36 36.2 34.2 34 34.2H24V34Z"
        fill={fill}
      />
    </svg>
  );
}
