/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchIcon } from "@heroicons/react/outline";
import * as React from "react";
import { Container } from "~/components/layout";
// import { SectionPage } from "~/components/ui";
import { Accordion } from "~/components/ui";
import faq, { Faqs } from "~/lib/data/faqs";
import { useIntl } from "react-intl";

const Faq: React.FC = () => {
  const { formatMessage: f } = useIntl();
  const [items, setItems] = React.useState<Faqs>(faq);
  const [searchQuery, setSearchQuery] = React.useState<string>(
    "" || "Tentang Share Car",
  );

  const dataContent = items.filter(({ title }) => title == searchQuery);
  const [itemsContent] = dataContent;
  // console.log(itemsContent);

  React.useLayoutEffect(() => {
    if (searchQuery != "Tentang Share Car") return;
    itemsContent;
  }, [searchQuery]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const fieldsValue = Object.fromEntries(formData.entries());
    const filtered = faq.filter((data) => {
      if (searchQuery == "") {
        setSearchQuery("Tentang Share Car");
      } else if (searchQuery != "Tentang Share Car") {
        return data.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return data;
    });
    // event.currentTarget.reset();
    setItems(filtered);
  };

  return (
    <Container className="z-30">
      <div className="text-center my-8 capitalize">
        <h2 className="text-2xl mx-auto max-w-sm font-semibold text-sc-dark">
          {f({ id: "pertanyaan populer tentang share car" })}
        </h2>
        {/* search not working in english */}
        <div className="w-full">
          <form
            className="inline-flex items-center justify-between w-full md:w-2/3 my-6 relative ring-2 ring-sc-blue rounded-full"
            onSubmit={handleSearch}
          >
            <input
              className={`input outline-none focus:outline-none border-none ring-transparent bg-transparent focus:text-sc-dark text-lg w-full px-8 `}
              name="search"
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              placeholder="Search"
              type="text"
            />
            <button
              aria-hidden
              aria-label="button search"
              className="px-8"
              type="submit"
            >
              <SearchIcon className="w-8 h-8 " />
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex justify-between p-12 items-start gap-6 bg-white rounded-xl shadow-2xl">
        <ul className="flex gap-x-6">
          <>
            <li className="flex-1 flex-col space-y-8 ">
              {items.map(({ title }) => (
                <div key={`${title}`} className="relative flex-1">
                  <h2
                    className="underlinex inline-block text-xl md:text-[32px] font-semibold text-sc-dark cursor-pointer"
                    onClick={() => setSearchQuery(title)}
                  >
                    {f({ id: `${title}` })}
                  </h2>
                </div>
              ))}
            </li>
            <li>
              {itemsContent?.question.map(({ title, description }) => (
                <div key={`${title}`} className="flex-1 flex-col gap-6">
                  <Accordion
                    key={`${title}`}
                    defaultOpen={true}
                    description={f({ id: `${description}` })}
                    myKey={`${title}`}
                    title={f({ id: `${title}` })}
                  />
                </div>
              ))}
            </li>
          </>
        </ul>
      </div>
      {/* mobile */}
      <div className="flex md:hidden justify-between p-12 items-start gap-6 bg-white rounded-xl shadow-2xl">
        <ul className="space-y-8">
          {items.map(({ title, question }) => (
            <li key={`${title}`} className="">
              <div className="inline-block">
                <h2 className="underlinex text-xl md:text-[32px] font-semibold text-sc-dark cursor-pointer">
                  {f({ id: `${title}` })}
                </h2>
              </div>
              <div className=" my-6 md:my-0">
                {question.map(({ title, description }) => (
                  <div key={`${title}`}>
                    <Accordion
                      key={`${title}`}
                      defaultOpen={false}
                      description={f({ id: `${description}` })}
                      myKey={`${title}`}
                      title={f({ id: `${title}` })}
                    />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Faq;
