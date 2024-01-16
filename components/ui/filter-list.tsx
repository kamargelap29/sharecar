/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";

interface FilterList {
  name?: string;
  children?: React.ReactNode;
}

// const people: FilterList[] = [
//   { name: "Citayam" },
//   { name: "Pondok Gede" },
//   { name: "Cililitan" },
//   { name: "Pancoran" },
//   { name: "Kebayoran" },
//   { name: "Angke" },
// ];

interface FilterListProps {
  title?: string;
  list?: string[];
  dataname?: string;
  ids?: string;
  children?: React.ReactNode;
  selected?: string;
  onChange?: any;
  classname?: string;
}
[];

export const FilterList = ({
  title,
  children,
  selected,
  onChange,
  classname,
}: FilterListProps) => {
  return (
    <Listbox onChange={onChange} value={selected}>
      <div className="relative ">
        <Listbox.Button
          className={classNames(
            classname,
            "relative cursor-default rounded-full py-2 pl-3 pr-10 text-left shadow-md ring-2 ring-sc-blue sm:text-md text-sc-dark",
          )}
        >
          {selected == "" ? (
            <span className="block text-base md:text:sm truncate">{title}</span>
          ) : (
            <span className="block text-base md:text:sm truncate">{`${selected}`}</span>
          )}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              aria-hidden="true"
              className={`${selected ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-blue transition duration-150 ease-in-out group-hover:text-opacity-80`}
            />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
            {children}
            {/* <Listbox.Option
              key={ids}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? "bg-sc-green text-sc-light" : "text-gray-900"
                }`
              }
              value={[list]}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {dataname}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option> */}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
