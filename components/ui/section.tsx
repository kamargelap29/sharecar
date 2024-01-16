/* eslint-disable react/prop-types */
import * as React from "react";
import cn from "classnames";

//if need display content full screen using this component

export type SectionProps = React.ComponentProps<"div">;

export const SectionPage = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={cn("box-content mx-0", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

SectionPage.displayName = "Section";
