import * as React from "react";
import { ComponentProps } from "react";

export function Linkedin({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      fill={fill}
      height={height}
      viewBox="0 0 24 25"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.98301 7.78909C6.19141 7.78909 7.17101 6.80949 7.17101 5.60109C7.17101 4.39269 6.19141 3.41309 4.98301 3.41309C3.77461 3.41309 2.79501 4.39269 2.79501 5.60109C2.79501 6.80949 3.77461 7.78909 4.98301 7.78909Z"
        fill="white"
      />
      <path
        d="M9.237 9.44648V21.5855H13.006V15.5825C13.006 13.9985 13.304 12.4645 15.268 12.4645C17.205 12.4645 17.229 14.2755 17.229 15.6825V21.5865H21V14.9295C21 11.6595 20.296 9.14648 16.474 9.14648C14.639 9.14648 13.409 10.1535 12.906 11.1065H12.855V9.44648H9.237ZM3.095 9.44648H6.87V21.5855H3.095V9.44648Z"
        fill="white"
      />
    </svg>
  );
}
