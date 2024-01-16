/* eslint-disable no-undef */
import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import Image from "next/image";

export const TestBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [popup, setPopup] = useState([]);
  const btnRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fetchPopupPromo = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APIURL}/api/banners/type/home-popup`,
        );
        const data = await response.json();
        const imageData = data && data?.data;
        imageData.length > 0 && setPopup(imageData[0]?.image_mobile);
      } catch (error) {
        return console.log(error);
      }
    };
    fetchPopupPromo();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* must add this btn to remove warning */}
      <div className="fixed inset-0 flex items-center justify-center sr-only">
        <button
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={openModal}
          ref={btnRef}
          type="button"
        >
          Open dialog
        </button>
      </div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={btnRef}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-sc-dark bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle transition-all">
                  <div className="w-full h-full max-w-md max-h-fit bg-cover">
                    <figure className="relative aspect-h-1 aspect-w-1">
                      {popup?.length > 0 && (
                        <Image
                          alt={`${popup}`}
                          // height="450"
                          // blurDataURL={`/_next/image?url=${popup}&w=16&q=1`}
                          // width="634"
                          layout="fill"
                          // placeholder="blur"
                          src={`${popup}`}
                        />
                      )}

                      {/* <img
                      alt={`${popup}`}
                      className="rounded-xl"
                      height="250"
                      src={`${popup}`}
                      width="334"
                    /> */}
                    </figure>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
