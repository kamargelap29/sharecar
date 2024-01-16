/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */

import * as React from "react";
import { Container } from "~/components/layout";
import { CardFooter } from "~/components/promo";
import {
  Card,
  FilterList,
  // FilterSearch,
  NotFound,
  Pagination,
  // Range,
  SectionPage,
} from "~/components/ui";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { useActivePromo } from "~/lib/fetcher";
// import { SWRConfig } from "swr";
import { format } from "date-fns";
import IndoLocale from "date-fns/locale/id";
import promotionType from "~/types/promotion";
import { useIntl } from "react-intl";
// import { useRouter } from "next/router";

// type PromoProps = {
//   code?: string;
//   description?: string;
//   duration?: null;
//   end_time?: string;
//   id?: number;
//   image?: null;
//   lang_id?: number;
//   location_id?: null;
//   start_time?: string;
//   title: string;
// }[];

const Promo = () => {
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postPerPage] = React.useState<number>(10);

  const [selectedMerek, setSelectedMerek] = React.useState<string | any>("");
  const [selectedCarId, setSelectedCarId] = React.useState<
    Array<number | undefined>
  >([]);
  const [selectedTipe, setSelectedTipe] = React.useState<string | any>("");
  const { formatMessage: f } = useIntl();
  // const [selectedLokasi] = React.useState<string | any>("");
  // const [selectedLokasi, setSelectedLokasi] = React.useState<string | any>("");

  const path =
    typeof window !== "undefined" ? window.location.pathname.slice(1) : "";

  // fetching data promo
  const { data: promoData, loading, error }: any = useActivePromo();
  const carPromo = promoData?.data;
  if (error) return <h1>Error fetch data</h1>;

  // filter action
  const promoList = carPromo
    ?.map(({ promotion_cars }: any) => promotion_cars)
    .flat();
  const availPromo = promoList?.map((value: any) => value.car_brand_name);

  const carBranPromo = availPromo?.flat(1);
  // reduce multiple same carbrands data
  const newTipeList = carBranPromo?.filter((item: number, pos: number) => {
    return carBranPromo.indexOf(item) == pos;
  });

  const filterCarName = promoList?.filter((item: any) => {
    return item.car_brand_name == selectedTipe;
  });
  const mereklist = filterCarName?.map((value: any) => {
    return {
      name: value.car_type_name,
      id: value.id,
    };
  });

  // reduce multiple same carType data
  // const newCarList = mereklist?.filter((item: any, index: number) => {
  //   return mereklist.includes(item.id, index +1)
  // });
  const newCarList = mereklist?.reduce((acc: any, curr: any) => {
    const x = acc.find((item: any) => item.id === curr.id);
    if (!x) {
      return acc.concat([curr]);
    } else {
      return acc;
    }
  }, []);
  // console.log(newCarList);

  if (error || carPromo?.length <= 0) return <NotFound contentdata={path} />;
  if (loading || promoData == "undefined")
    return <h1 className="animate-bounce">Loading...</h1>;

  const LastIndexPage = currentPage * postPerPage;
  const firstIndexPage = LastIndexPage - postPerPage;
  const currentPost = carPromo?.slice(firstIndexPage, LastIndexPage);

  // handleClick pagination
  const paginate = (number: number) => setCurrentPage(number);

  const testFilter = () => {
    const filterd = [selectedCarId];
    const runFilter = currentPost?.filter((val: any) =>
      val.promotion_cars?.some((e: any) => filterd.includes(e.id)),
    );
    return setItems(runFilter);
  };

  const resetFilter = () => {
    setSelectedTipe("");
    setSelectedMerek("");
    setItems([]);
    setSelectedCarId([]);
  };

  // console.log(items);
  // console.log(selectedCarId);

  return (
    // <SWRConfig value={{ fallback }}>
    <SectionPage className="px-8 py-8 md:px-[88px] z-30">
      <Container className="block bg-[#ffff] rounded-lg lg:rounded-full">
        <div className="flex flex-wrap lg:flex-row flex-col justify-evenly items-start lg:items-center py-4 gap-4">
          <div className="flex-1">
            <h3 className="text-sc-dark font-semibold">
              {f({ id: "filter berdasarkan" })}:
            </h3>
          </div>

          {/* durasi */}
          {/* <div className="flex-1">
            <FilterSearch
              title={
                <>
                  {rangeData !== "" ? (
                    <span>{`${rangeData} jam`}</span>
                  ) : (
                    <span>Durasi </span>
                  )}
                </>
              }
              children={
                <Range
                  defaultValue={rangeData}
                  className="range-xs"
                  handleChange={(e) => setRangeData(e.currentTarget.value)}
                />
              }
            />
          </div> */}

          {/* Type Kendaraan */}
          <div className="flex-1">
            <FilterList
              children={newTipeList?.map((val: any, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }: any) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-sc-green text-sc-light" : "text-gray-900"
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
                          <CheckIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
              classname="w-full"
              onChange={setSelectedTipe}
              selected={selectedTipe}
              title={f({ id: "tipe kendaraan" })}
            />
          </div>

          {/* Merek Kendaraan */}
          <div className="flex-1">
            <FilterList
              children={
                filterCarName?.length >= 0
                  ? newCarList?.map((val: any, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }: any) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-sc-green text-sc-light"
                              : "text-gray-900"
                          }`
                        }
                        value={val.name}
                      >
                        {({ selectedMerek }: any) => (
                          <>
                            <span
                              className={`block truncate uppercase ${
                                selectedMerek ? "font-medium" : "font-normal"
                              }`}
                              onClick={() => setSelectedCarId(val.id)}
                            >
                              {val.name}
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
                  : ""
              }
              classname="w-full"
              onChange={setSelectedMerek}
              selected={selectedMerek}
              title={f({ id: "merek kendaraan" })}
            />
          </div>

          {/* lokasi */}
          {/* <div className="flex-1">
            <FilterList
              title="Lokasi"
              selected={selectedLokasi}
              onChange={setSelectedLokasi}
              children={lokasilist.map((val: any, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }: any) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-sc-green text-sc-light" : "text-gray-900"
                    }`
                  }
                  value={val}
                >
                  {({ selectedLokasi }: any) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedLokasi ? "font-medium" : "font-normal"
                        }`}
                      >
                        {val}
                      </span>
                      {selectedLokasi ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            />
          </div> */}
          <div className="flex-1">
            <button
              aria-label="terapkan"
              className="mx-0 lg:mx-4 px-4 py-2 rounded-full text-sm bg-sc-blue hover:bg-sc-blue/75 text-sc-light w-full"
              onClick={() => testFilter()}
            >
              {f({ id: "terapkan" })}
            </button>
          </div>
          <div className="flex-1">
            <button
              aria-label="reset"
              className="mx-0 lg:mx-4 px-4 py-2 rounded-full text-sm ring-2 ring-sc-blue hover:bg-sc-green/75 text-sc-blue w-full "
              onClick={() => resetFilter()}
            >
              reset
            </button>
          </div>
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {items.length === 0
          ? currentPost?.map(
              ({ code, name, image, created_at, desc }: promotionType) => {
                const reverseUnixTime: Date = new Date(`${created_at}`);
                const datePromo = format(reverseUnixTime, "dd MMMM yyyy", {
                  locale: IndoLocale,
                });
                return (
                  <Card
                    key={`${name}`}
                    children={
                      <CardFooter promo={code} promoDetailDesc={`${desc}`} />
                    }
                    datePost={datePromo}
                    imgsrc={`${image}`}
                    myKey={`${name}`}
                    // description={`${desc}`}
                    title={`Promo ${name}`}
                  />
                );
              },
            )
          : items?.map(
              ({ code, name, image, created_at, desc }: promotionType) => {
                const reverseUnixTime: Date = new Date(`${created_at}`);
                const datePromo = format(reverseUnixTime, "dd MMMM yyyy", {
                  locale: IndoLocale,
                });
                return (
                  <Card
                    key={`${name}`}
                    children={
                      <CardFooter promo={code} promoDetailDesc={`${desc}`} />
                    }
                    datePost={datePromo}
                    imgsrc={`${image}`}
                    myKey={`${name}`}
                    // description={`${desc}`}
                    title={`Promo ${name}`}
                  />
                );
              },
            )}
      </div>
      <Container className=" my-12 z-30">
        <Pagination
          activePage={currentPage}
          paginate={paginate}
          postPerPage={postPerPage}
          totalPost={carPromo?.length}
        />
      </Container>
    </SectionPage>
    // </SWRConfig>
  );
};

export default Promo;
