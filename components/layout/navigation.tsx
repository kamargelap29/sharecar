/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationMenu } from "./navigation-menu";
import Image from "next/image";
import { useIntl } from "react-intl";
import Lang from "./lang";

// import { ChevronDownIcon } from "@heroicons/react/solid";
// export interface NavigationItem {
//   name: string;
//   icon: React.ComponentType<React.ComponentProps<"svg">>;
//   href: string;
//   exact?: boolean;
//   external?: boolean;
// }

export type MenuItemProps = {
  name: string | undefined;
  href?: string;
  exact?: boolean;
};

type BtnLinkProps = {
  onClick?: () => void;
  href?: string | undefined;
  name: string;
  as?: string | undefined;
};

export const infoMenu: MenuItemProps[] = [
  {
    name: "kontak",
    href: "/kontak-page",
    exact: true,
  },
  {
    name: "news",
    href: "/news",
    exact: true,
  },
  {
    name: "resource",
    href: "/resource",
    exact: true,
  },
];

export const mobileMenuitems: MenuItemProps[] = [
  {
    name: "harga",
    href: "/harga",
    exact: true,
  },
  {
    name: "lokasi",
    href: "/lokasi",
    exact: true,
  },
  {
    name: "promo",
    href: "/promo",
    exact: true,
  },
  {
    name: "faq",
    href: "/faq",
    exact: true,
  },
  {
    name: "kontak",
    href: "/kontak-page",
    exact: true,
  },
  {
    name: "news",
    href: "/news",
    exact: true,
  },
  {
    name: "resource",
    href: "/resource",
    exact: true,
  },
];
export const menuitems: MenuItemProps[] = [
  {
    name: "harga",
    href: "/harga",
    exact: true,
  },
  {
    name: "lokasi",
    href: "/lokasi",
    exact: true,
  },
  {
    name: "promo",
    href: "/promo",
    exact: true,
  },
  {
    name: "faq",
    href: "/faq",
    exact: true,
  },
  // {
  //   name: "info",
  //   href: "/info",
  //   exact: true,
  // },
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const Navigation: React.FC = () => {
  const { formatMessage: f } = useIntl();
  const { push } = useRouter();
  const popoverButtonRef = React.useRef<HTMLButtonElement>(null);
  // btn handling
  const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
    ({ onClick, href, name }, ref) => {
      return (
        <a
          className="underlinex capitalize"
          href={href}
          onClick={onClick}
          ref={ref}
        >
          {f({ id: `${name}` })}
        </a>
      );
    },
  );

  // locale
  const { locales, asPath, locale } = useRouter();
  const imgsrc =
    locale == "id"
      ? "/assets/images/icons8-indonesia-48.png"
      : "/assets/images/icons8-usa-48.png";

  return (
    <Popover className="relative z-50 min-w-full bg-lm-light">
      {({ open }) => (
        <>
          <div className="sticky max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">Share Car</span>

                    <Image
                      alt="logo"
                      height={48}
                      src="/assets/images/sc-logo.png"
                      width={82}
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button
                  className="bg-bsd-light rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lm-blue"
                  ref={popoverButtonRef}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon aria-hidden="true" className="h-6 w-6" />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="hidden cursor-pointer md:flex items-center space-x-10"
              >
                {menuitems.map(({ name, href }: MenuItemProps) => (
                  <BtnLink
                    key={name}
                    name={`${name}`}
                    onClick={() => push(`${href}`)}
                  />
                  // <Link key={name} href={`/${href}`} passHref>
                  //   <a className="text-base font-medium text-bsd-dark hover:text-bsd-grey">
                  //     {name}
                  //   </a>
                  // </Link>
                ))}
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md hover:text-opacity-100 focus:outline-none `}
                >
                  <span>Info</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`${open ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-grey transition duration-150 ease-in-out group-hover:text-opacity-80`}
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
                    className="absolute left-1/2 md:left-[63%] z-10 mt-3 md:mt-52 w-screen max-w-[160px] -translate-x-1/2 transform px-4 sm:px-0 "
                    focus
                  >
                    <div className="inline-block overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-sc-light p-7">
                        {infoMenu.map(({ name, href }: MenuItemProps) => (
                          <BtnLink
                            key={name}
                            name={f({ id: `${name}` })}
                            onClick={() => push(`${href}`)}
                          />
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover.Group>
              {/* bahasa */}
              <div className="flex-none hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Lang
                  imgsrc={imgsrc}
                  language={locale}
                  myRef={popoverButtonRef}
                >
                  {locales?.map((loc) => {
                    const flagsrc =
                      loc == "id"
                        ? "/assets/images/icons8-indonesia-48.png"
                        : "/assets/images/icons8-usa-48.png";
                    return (
                      <li
                        key={loc}
                        className="flex items-center justify-center focus:outline-none active:outline-none focus:border-none active:border-none"
                      >
                        <Link href={asPath} locale={loc}>
                          <a className="flex items-center gap-2">
                            <Image
                              alt={`flag-${loc}`}
                              height={48}
                              src={flagsrc}
                              width={48}
                            />
                            <span className="text-sc-dark ">{loc}</span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </Lang>
              </div>
            </div>
          </div>
          <NavigationMenu open={open} popoverButtonRef={popoverButtonRef}>
            <Lang imgsrc={imgsrc} language={locale}>
              {locales?.map((loc) => {
                const flagsrc =
                  loc == "id"
                    ? "/assets/images/icons8-indonesia-48.png"
                    : "/assets/images/icons8-usa-48.png";
                return (
                  <li key={loc} className="flex items-center justify-center">
                    <Link href={asPath} locale={loc}>
                      <a className="flex items-center gap-2">
                        <Image
                          alt={`flag-${loc}`}
                          height={48}
                          src={flagsrc}
                          width={48}
                        />
                        <span className="text-sc-dark ">{loc}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </Lang>
          </NavigationMenu>
        </>
      )}
    </Popover>
  );
};
