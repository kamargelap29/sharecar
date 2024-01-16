import * as React from "react";
import { useIntl } from "react-intl";
// import { FilterList } from "../ui";
import { Accordion } from "../ui/accordion";
import { CopyButton } from "../ui/copy-btn";

type cardFooterProps = {
  promo?: string;
  promoDetailDesc?: string;
};

export const CardFooter: React.FC<cardFooterProps> = ({
  promo,
  promoDetailDesc,
}) => {
  const { formatMessage: f } = useIntl();
  return (
    <div className="w-full">
      <div className="bg-[#E0ECF9] flex justify-between items-center py-3 px-4 rounded-lg w-full gap-4 md:gap-1">
        <span className="text-[10px] md:text-base text-sc-dark font-medium capitalize">
          {f({ id: "kode promo" })}
        </span>
        <div className="bg-sc-light pl-2 py-0 flex items-center justify-between gap-x-2 rounded-lg">
          <span className="text-[12px] lg:text-base">{promo}</span>
          <CopyButton text={`${promo}`} />
          {/* <span className="px-3 py-0 outline outline-sc-blue rounded-lg">
            copy
          </span> */}
        </div>
      </div>
      {/* disclosure */}
      <div className="my-4">
        <Accordion
          className="bg-[#E0ECF9]"
          description={promoDetailDesc}
          title={f({ id: "syarat dan ketentuan" })}
        />
      </div>
    </div>
  );
};
