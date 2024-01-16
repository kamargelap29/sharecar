/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import * as React from "react";
import { Calculator, SliderCars } from "~/components/harga";
import { Container } from "~/components/layout";
// import { Container } from "~/components/layout";
import { FilterList, NotFound, SectionPage } from "~/components/ui";
import { useActiveCars } from "~/lib/fetcher";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import fetch from "isomorphic-unfetch";
import CarsProps from "~/types/cars";
import { useIntl } from "react-intl";
import { SWRConfig } from "swr";

type DataProps = {
  // [key: string]: string | number; // 👈️ variable key
  fallback?: CarsProps[] | undefined;
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/cars?active=1`,
  );

  const ActiveCarData = await res.json();

  return {
    props: {
      fallback: {
        cars: ActiveCarData,
      },
    },
  };
}

const Harga = ({ fallback }: DataProps) => {
  const [selectedTipe, setSelectedTipe] = React.useState<string | any>("");
  const [selectedMerek, setSelectedMerek] = React.useState<string | any>("");
  const [selectedCarData, setSelectedCarData] = React.useState<number | any>(0);
  const { formatMessage: f } = useIntl();
  const { data: CarData, loading, error } = useActiveCars(fallback);
  // const { data: CarBrands } = useCarsBrands();
  const path =
    typeof window !== "undefined" ? window.location.pathname.slice(1) : "";
  if (loading) return <h1>loading</h1>;
  if (error) return <NotFound contentdata={path} />;
  // if (error) return <span className="z-30">failed fetching the data</span>;

  // sample data from 1st index of data
  const sampleData = CarData?.data;

  const tipelist = sampleData?.map((value: any) => value.car_brand_name);
  const newTipeList = tipelist?.filter((item: number, pos: number) => {
    return tipelist.indexOf(item) == pos;
  });

  const initialData = sampleData?.find((item: any) => {
    if (selectedCarData === 0 && selectedMerek == "") {
      return item.id == sampleData[0].id;
    }
    if (
      (selectedMerek !== "" && selectedCarData <= 0) ||
      (selectedMerek !== "" && selectedCarData >= 0)
    ) {
      return item.car_type_name == selectedMerek;
    }
    if (selectedCarData >= 0 && selectedMerek === "") {
      return item.id == selectedCarData;
    }
  });

  const filterCarName = sampleData?.filter((item: any) => {
    return item.car_brand_name == selectedTipe;
  });
  const mereklist = filterCarName?.map((value: any) => value.car_type_name);
  // const mereklist = filterCarName?.map((value: any) => value.name);

  // handleClick carId
  const carIdData = (number: number) => {
    setSelectedCarData(number), setSelectedMerek(""), setSelectedTipe("");
  };

  return (
    <SWRConfig value={{ fallback }}>
      <SectionPage className="">
        <div className="relative before:bg-cover bg-repeat-x bg-white mix-blend-multiply overflow-hidden bg-cityVector z-30">
          {/* <div className="absolute left-0 -z-10 w-full">
          <figure className="bg-repeat-x object-cover">
            {React.createElement(City, { width: "1440px", height: "601px" })}
          </figure>
        </div> */}
          <div className="flex items-center justify-center">
            <h2 className="text-2xl md:text-[40px] px-2 md:px-0 text-center font-semibold text-sc-dark my-[100px] mx-auto max-w-[416px] leading-normal whitespace-pre-wrap capitalize">
              {f({ id: `temukan beberapa kendaraan kami` })}
            </h2>
          </div>
          <div className="mt-32 md:mt-[120px] mb-4 md:mb-0  ml-0 md:ml-8 transition-all">
            <SliderCars CarData={sampleData} carId={carIdData} />
            <div className="italic text-sm my-8">
              <p>*{f({ id: "harga belum termasuk PPN 11%" })}</p>
              <p>*{f({ id: "harga khusus area jabodetabek" })}</p>
            </div>
          </div>
          <Container>
            <div className="flex md:flex-row flex-col items-center bg-sc-blue gap-[53px] rounded-xl p-4 md:p-[53px] md: my-[59px]">
              <div className="flex-initial order-last md:order-first h-full">
                <img
                  alt="sharecar-thumb"
                  height="auto"
                  src="/assets/images/sharecar-thumb.png"
                  width="327"
                />
              </div>
              <div className="flex-1">
                <p className="text-sc-light text-base md:text-2xl font-semibold mb-4">
                  {f({
                    id: "kembalikan kendaraan dengan level BBM yang sama dengan saat pengambilan.",
                  })}
                </p>
                <p className="text-sc-light text-base md:text-2xl font-semibold">
                  {f({
                    id: "biaya tambahan sebesar Rp8.500,-/liter akan dikenakan apabila terdapat kekurangan BBM pada saat pengembalian.",
                  })}
                </p>
                <p className="italic mt-8 text-sc-light">
                  *{f({ id: "harga belum termasuk PPN 11%" })}
                </p>
              </div>
            </div>
          </Container>

          <Container className="capitalize">
            <Calculator initialData={initialData}>
              <div className="flex items-center justify-evenly flex-wrap gap-4">
                <div className="flex-initial">
                  {/* Type Kendaraan */}

                  <FilterList
                    children={newTipeList?.map((val: any, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }: any) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-sc-green text-sc-light"
                              : "text-gray-900"
                          }`
                        }
                        value={val}
                      >
                        {({ selectedTipe }: any) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedTipe ? "font-medium" : "font-normal"
                              }`}
                            >
                              {val}
                            </span>
                            {selectedTipe ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue">
                                <CheckIcon
                                  aria-hidden="true"
                                  className="h-5 w-5"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                    onChange={setSelectedTipe}
                    selected={selectedTipe}
                    title={f({ id: "Type Kendaraan" })}
                  />
                </div>
                <div className="flex-initial">
                  {/* Merek Kendaraan */}

                  <FilterList
                    children={
                      filterCarName?.length > 0
                        ? mereklist?.map((val: any, index: number) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }: any) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-sc-green text-sc-light"
                                    : "text-gray-900"
                                }`
                              }
                              value={val}
                            >
                              {({ selectedMerek }: any) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selectedMerek
                                        ? "font-medium"
                                        : "font-normal"
                                    }`}
                                  >
                                    {val}
                                  </span>
                                  {selectedMerek ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue">
                                      <CheckIcon
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))
                        : null
                    }
                    onChange={setSelectedMerek}
                    selected={selectedMerek}
                    title={f({ id: "Merek Kendaraan" })}
                  />
                </div>
              </div>
            </Calculator>
          </Container>
        </div>
      </SectionPage>
    </SWRConfig>
  );
};

export default Harga;
