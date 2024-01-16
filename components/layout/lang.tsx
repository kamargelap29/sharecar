import * as React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";

interface LangProps {
  imgsrc?: string;
  language?: string;
  children?: React.ReactNode;
  myRef?: React.RefObject<HTMLButtonElement>;
}

const Lang = ({ imgsrc, language, children, myRef }: LangProps) => {
  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md hover:text-opacity-100 focus:outline-none `}
              ref={myRef}
            >
              <span className="sr-only">{language}</span>
              <Image
                alt={`flag-${language}`}
                height={48}
                src={`${imgsrc}`}
                width={48}
              />
              <ChevronDownIcon
                aria-hidden="true"
                className={`${open ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-light md:text-sc-grey transition duration-150 ease-in-out group-hover:text-opacity-80`}
              />
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
              <Popover.Panel
                className="absolute right-0 z-10 mt-3 md:mt-0 w-screen max-w-[160px] transform px-4 sm:px-0 "
                focus
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-sc-light p-7">
                    <ul className="list-none">{children}</ul>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
export default Lang;
