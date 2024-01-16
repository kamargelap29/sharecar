import * as React from "react";
import { ComponentProps } from "react";

export function Transmision({
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
        d="M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M24 16C26.2091 16 28 14.2091 28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12C20 14.2091 21.7909 16 24 16Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M38 16C40.2091 16 42 14.2091 42 12C42 9.79086 40.2091 8 38 8C35.7909 8 34 9.79086 34 12C34 14.2091 35.7909 16 38 16Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10 40C12.2091 40 14 38.2091 14 36C14 33.7909 12.2091 32 10 32C7.79086 32 6 33.7909 6 36C6 38.2091 7.79086 40 10 40Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M24 40C26.2091 40 28 38.2091 28 36C28 33.7909 26.2091 32 24 32C21.7909 32 20 33.7909 20 36C20 38.2091 21.7909 40 24 40Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M38 16V20C38 21.0609 37.5786 22.0783 36.8284 22.8284C36.0783 23.5786 35.0609 24 34 24H10M10 16V32V16ZM24 16V32V16Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
