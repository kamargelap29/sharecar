import * as React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { mobileMenuitems, MenuItemProps } from "./navigation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

// type BtnLinkProps = {
//   onClick?: () => void;
//   href?: string;
//   name: string;
// };

interface NavigationMenuPopoverProps {
  open?: boolean;
  close?: (ref?: React.RefObject<HTMLButtonElement>) => void;
  popoverButtonRef?: React.RefObject<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const NavigationMenu = ({
  open,
  popoverButtonRef,
  children,
}: NavigationMenuPopoverProps) => {
  const router = useRouter();
  const { formatMessage: f } = useIntl();

  React.useEffect(() => {
    const handleRouteChange = () => {
      if (open && popoverButtonRef?.current) {
        popoverButtonRef.current.click();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, open, popoverButtonRef]);

  // const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
  //   ({ onClick, href, name }, ref) => {
  //     return (
  //       <a onClick={onClick} href={href} ref={ref}>
  //         {name}
  //       </a>
  //     );
  //   }
  // );
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden"
        focus
      >
        <div className=" gardient divide-y-2 divide-gray-50 min-h-screen ">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="outline-none border-none">
                <Link href="/">
                  <a>
                    <span className="sr-only ">Share Car</span>
                    <Image
                      alt="logo"
                      height={48}
                      src="/assets/images/logo-sc-light.png"
                      width={82}
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-transparant rounded-md p-2 inline-flex items-center justify-center text-sc-light hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon aria-hidden="true" className="h-6 w-6" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6 bg-transparent text-sc-light">
              <nav className="flex flex-col gap-y-8 mx-[44px]">
                <div className="flex justify-end">{children}</div>
                <ul className="mb-14">
                  {mobileMenuitems.map(({ name, href }: MenuItemProps) => {
                    // const isActive = exact
                    // ? href === router.asPath
                    // : router.asPath.startsWith(href);
                    return (
                      <li key={`${name}`} className="w-full">
                        <Link href={`${href}`}>
                          <a className="outline-none focus:outline-none active:outline-none active:border-none border-b-2 flex ">
                            <span className="my-2 text-xl font-medium text-sc-light uppercase">
                              {f({ id: name })}
                            </span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className="py-6 px-5">
              <div>
                <a
                  href="#email"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium "
                >
                  Reseller
                </a>
              </div>
            </div> */}
        </div>
      </Popover.Panel>
    </Transition>
  );
};
