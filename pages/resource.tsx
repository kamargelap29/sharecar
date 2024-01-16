/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */

import * as React from "react";
import { Card, NotFound, Pagination, SectionPage } from "~/components/ui";

import { useResource } from "~/lib/fetcher";
// import { SWRConfig } from "swr";
import { format } from "date-fns";
import IndoLocale from "date-fns/locale/id";
import resourceType from "~/types/resource";
import { Container } from "~/components/layout";
// import { useRouter } from "next/router";

const Resource = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postPerPage] = React.useState<number>(3);
  const path =
    typeof window !== "undefined" ? window.location.pathname.slice(1) : "";

  // fetching data promo
  const { data: resourceData, error }: any = useResource();
  const resourceFiles = resourceData?.data;

  if (error || resourceFiles?.length === 0)
    return <NotFound contentdata={path} />;
  if (!resourceFiles || resourceData == "undefined")
    return <h1 className="animate-bounce">Loading...</h1>;

  // console.log(resourceFiles);

  // handleClick pagination
  const paginate = (number: number) => setCurrentPage(number);
  // page data
  const LastIndexPage = currentPage * postPerPage;
  const firstIndexPage = LastIndexPage - postPerPage;
  const currentPost = resourceFiles?.slice(firstIndexPage, LastIndexPage);

  return (
    // <SWRConfig value={{ fallback }}>
    <SectionPage className="px-8 py-8 md:px-[88px] z-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {currentPost?.map(({ name, image, created_at, file }: resourceType) => {
          const reverseUnixTime: Date = new Date(`${created_at}`);
          const datePromo = format(reverseUnixTime, "dd MMMM yyyy", {
            locale: IndoLocale,
          });
          return (
            <div key={`${name}`}>
              <a
                download
                href={`${file}`}
                rel="noopener noreferrer"
                target="__blank"
              >
                <Card
                  datePost={datePromo}
                  imgsrc={image}
                  myKey={`${name}`}
                  title={`Promo ${name}`}
                  // description={`${lokasi}`}
                  // children={<CardFooter promo={code} />}
                />
              </a>
            </div>
          );
        })}
      </div>
      <Container className=" my-12 z-30">
        <Pagination
          activePage={currentPage}
          paginate={paginate}
          postPerPage={postPerPage}
          totalPost={resourceFiles?.length}
        />
      </Container>
    </SectionPage>
    // </SWRConfig>
  );
};

export default Resource;
