import * as React from "react";

import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link, { LinkProps } from "next/link";
import { useIntl } from "react-intl";

type BackButtonProps = LinkProps;

export function BackButton(props: BackButtonProps) {
  const { formatMessage: f } = useIntl();
  return (
    <nav aria-label="Back" className="z-30">
      <Link {...props}>
        <a className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 capitalize underlinex">
          <ChevronLeftIcon
            aria-hidden="true"
            className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
          />
          {f({ id: "kembali" })}
        </a>
      </Link>
    </nav>
  );
}
