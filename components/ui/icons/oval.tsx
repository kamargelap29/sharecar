import * as React from "react";
import { ComponentProps } from "react";

export function Oval({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="imagebot_2">
        <title>imagebot_2</title>
        <path
          d="M 3.57837 297.906 C 3.57837 176.731 199.883 78.5784 442.234 78.5784 C 684.585 78.5784 880.889 176.731 880.889 297.906 C 880.889 419.081 684.585 517.234 442.234 517.234 C 199.883 517.234 3.57837 419.081 3.57837 297.906 Z"
          fill={fill}
          id="imagebot_45"
          stroke="none"
          strokeDasharray="null"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="null"
          strokeWidth="3"
          transform="translate(0 1.95313) matrix(0.806667 0 0 0.806667 7.8125 87.8906)"
        />
      </g>
      <metadata>
        image/svg+xmlOpenclipartStriped Ball2013-08-26T15:48:18A striped
        ball.https://openclipart.org/detail/182218/striped-ball-by-gustavorezende-182218gustavorezendeballcirclespherestripedstripes
      </metadata>
    </svg>
  );
}
