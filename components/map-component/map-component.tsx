/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import dynamic from "next/dynamic";
// import { useBanners } from "~/lib/fetcher";
import { Container } from "../layout";
import { SectionPage } from "../ui";
import { useIntl } from "react-intl";
import { useActiveLocations } from "~/lib/fetcher";
import Image from "next/image";
import locationProps from "~/types/location";

export const MapComponent: React.FC = () => {
  const [longlatEx, setLonglatEx] = React.useState<any>(null);
  const { formatMessage: f } = useIntl();
  const { data: MapLoc, loading }: any = useActiveLocations();
  if (loading || MapLoc == `undefined`) return <span>Loading!!</span>;

  const allMapDataActive = MapLoc?.data;
  // console.log(allMapDataActive);

  // lazy import for map components
  const Map = dynamic(() => import(`~/components/map-component/test-map`), {
    ssr: false,
  });

  return (
    <>
      <SectionPage className="px-8 md:px-[88px] mb-16 z-30">
        <div className="flex flex-col items-center justify-center w-full md:w-[622px] space-y-4">
          <h2 className=" text-center text-2xl md:text-[40px] text-sc-dark font-semibold leading-normal md:leading-10 capitalize">
            {f({ id: `temukan kami di berbagai lokasi` })}
          </h2>
          <p className="text-center text-xl text-sc-dark">
            {f({
              id: `pesan mobil terdekat di sekitarmu, dan rasakan kemudahan pengalaman dalam berkendara.`,
            })}
          </p>
        </div>
      </SectionPage>
      <Container className="block mx-auto lg:mx-14 relative lg:flex bg-[#ffff] shadow-xl p-8 my-[60px] gap-0 md:gap-4 max-h-full overflow-hidden z-30">
        <div className="relative flex-intial h-[58vh] w-full md:w-[678px]">
          <Map locdata={allMapDataActive} pos={longlatEx} />
        </div>
        <div className="flex-none md:flex-initial max-w-[768px] h-full my-4 md:my-16 lg:my-0 ">
          {/* <div className="">
              <p className="mb-4 text-xl font-semibold text-sc-dark">
                Lokasi saat ini
              </p>
              <span>Jl. Maluku No.54-34, RT.6/RW.5, Gondangdia..</span>
            </div> */}
          {/* search */}
          {/* <div className="relative my-6">
              <input
                type="text"
                placeholder="Search"
                className="input ring-2 ring-sc-blue rounded-full bg-transparent text-lg w-full max-w-full p-8"
              />
              <div className="absolute -translate-y-12 right-4">
                <SearchIcon className="w-8 h-8 " />
              </div>
            </div> */}

          {/* address list */}
          <ul className="space-y-4 relative mt-16 md:mt-0 carousel carousel-vertical h-72 md:h-[390px] lg:h-[567px] xl:h-[58vh]">
            {allMapDataActive?.map(
              ({
                id,
                image,
                name,
                desc,
                latitude,
                longitude,
              }: locationProps) => (
                <li key={`${id}`} className="carousel-item h-fit">
                  <div
                    className="flex bg-sc-light rounded-xl shadow-xl p-6 w-full"
                    onClick={() =>
                      setLonglatEx({ lat: latitude, lng: longitude })
                    }
                  >
                    <div className="basis-1/3 w-full max-w-96">
                      <figure className="relative aspect-w-4 aspect-h-3 ">
                        <Image
                          alt={`img-${id}`}
                          // blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
                          layout="fill"
                          // placeholder="blur"
                          src={`${image}`}
                        />
                        {/* <Image
                          alt={`img-${id}`}
                          layout="fill"
                          src={`${process.env.NEXT_PUBLIC_APIURL}/${image}`}
                        /> */}
                        {/* <img
                          src="https://api.lorem.space/image/shoes?w=400&h=225"
                          alt="Shoes"
                          className="rounded-xl object-cover"
                        /> */}
                      </figure>
                    </div>

                    <div className="basis-2/3">
                      <h3 className="text-sc-dark font-semibold">{name}</h3>
                      <div
                        className="max-w-[400px]"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                      {/* <p className="text-sc-dark">{`${desc}`}</p> */}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </>
  );
};
