/* eslint-disable react/prop-types */
import * as React from "react";
import cn from "classnames";

//if need display content full screen using this component

export type SectionGardientProps = React.ComponentProps<"div">;

export const SectionGardient = React.forwardRef<
  HTMLDivElement,
  SectionGardientProps
>(({ className, children, ...rest }, ref) => {
  return (
    <div
      className={cn(
        "box-content my-[59px] px-8 bg-gradient-to-r from-sc-green to-sc-blue",
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

SectionGardient.displayName = "SectionGardient";
