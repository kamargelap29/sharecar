/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import cn from "classnames";

interface DisclosureProps {
  title?: string;
  description?: any;
  defaultOpen?: boolean;
  className?: string;
  myKey?: string | undefined;
}

export const Accordion = ({
  title,
  description,
  defaultOpen,
  className,
  myKey,
}: DisclosureProps) => {
  return (
    <div key={myKey} className="pb-6">
      <div
        className={cn(
          className,
          " max-w-md rounded-2xl p-2 ring-2 ring-sc-blue/75",
        )}
      >
        <Disclosure defaultOpen={defaultOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-sc-dark hover:bg-sc-green/80 focus:bg-sc-blue/80 focus:outline-none focus-visible:ring focus-visible:ring-sc-light focus-visible:ring-opacity-75">
                <span className="capitalize">{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "text-sc-blue"
                  } h-5 w-5 text-black hover:text-sc-light`}
                />
              </Disclosure.Button>
              {open && (
                <Disclosure.Panel
                  className="px-4 pt-4 pb-2 text-sm text-gray-500 whitespace-pre-line"
                  static
                >
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
