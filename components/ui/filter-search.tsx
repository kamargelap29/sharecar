import * as React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// const solutions = [
//   {
//     name: "Insights",
//     description: "Measure actions your users take",
//     href: "##",
//     icon: "",
//   },
//   {
//     name: "Automations",
//     description: "Create your own targeted content",
//     href: "##",
//     icon: "",
//   },
//   {
//     name: "Reports",
//     description: "Keep track of your growth",
//     href: "##",
//     icon: "",
//   },
// ];

interface FilterSearchProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export const FilterSearch = ({ title, children }: FilterSearchProps) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group relative inline-flex items-center rounded-full w-full bg-transparant px-3 py-2 text-base font-medium text-sc-dark hover:text-opacity-100 focus:outline-none ring-2 ring-sc-blue  focus-visible:ring-opacity-75`}
          >
            {title}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                aria-hidden="true"
                className={`${open ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-blue transition duration-150 ease-in-out group-hover:text-opacity-80`}
              />
            </span>
          </Popover.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0 ">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-sc-light p-7 ">
                  {children}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
