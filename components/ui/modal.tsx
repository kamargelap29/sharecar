/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useRef } from "react";

type ModalProps = {
  images: string;
  title?: string;
  isOpen: boolean;
  onToggle: (value: boolean) => void;
};

export const MyModal = ({ images, isOpen, onToggle, title }: ModalProps) => {
  const btnRef = useRef(null);

  return (
    <>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={btnRef}
          onClose={onToggle}
          open={isOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden="true"
              className="inline-block h-screen align-middle"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">
                <div className="relative">
                  <div className="min-w-full">
                    <img alt={`img`} className="" src={images} />
                    {/* <div className="absolute top-16 bottom-0 bg-bsd-dark/70 w-full text-bsd-light"></div> */}
                  </div>

                  <div className="absolute top-2 right-2">
                    <button
                      aria-label="modal"
                      className="inline-flex justify-center px-2 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-full hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => onToggle(false)}
                      type="button"
                    >
                      <XIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0  ">
                    <div className="inline-flex justify-center px-4 py-2">
                      <Dialog.Title
                        as="h3"
                        className="text-right text-lg font-medium leading-6 text-bsd-light"
                      >
                        {title}
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
