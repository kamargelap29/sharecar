/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import * as React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
// import useSWR from "swr";
import { Container } from "~/components/layout";
import { Card, NotFound, SectionPage, Pagination } from "~/components/ui";
// import { getAllBlogs } from "~/lib/api";
import { useBlogs } from "~/lib/fetcher";
import fetch from "isomorphic-unfetch";
import format from "date-fns/format";
import IndoLocale from "date-fns/locale/id";
import BlogProps from "~/types/blogs";
import { SWRConfig } from "swr";
import Head from "next/head";
import { NextSeo } from "next-seo";

interface BlogsDataProps {
  fallback: BlogProps[];
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`);
  const slugBlogData = await res.json();

  return {
    props: {
      // slugBlogData,
      fallback: {
        news: slugBlogData,
      },
    },
    revalidate: 1,
  };
}

// const path =
//   typeof window !== "undefined" ? window.location.pathname.slice(1) : "";

const Blogs = ({ fallback }: BlogsDataProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postPerPage] = React.useState<number>(10);

  const { data: BlogsData, loading, error } = useBlogs(fallback);
  // const { data: BlogsData, loading, error } = useBlogsWithLang();
  const allBlogs = BlogsData?.data;
  // console.log(allBlogs);

  const path =
    typeof window !== "undefined" ? window.location.pathname.slice(1) : "";

  if (loading || typeof allBlogs === "undefined")
    return <h2 className="z-30 my-16">loading!!</h2>;
  if (error || allBlogs.length == 0) return <NotFound contentdata={path} />;

  // page data
  const LastIndexPage = currentPage * postPerPage;
  const firstIndexPage = LastIndexPage - postPerPage;
  const currentPost = allBlogs?.slice(firstIndexPage, LastIndexPage);

  // handleClick pagination
  const paginate = (number: number) => setCurrentPage(number);

  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>{path} | Share Car </title>
        <meta content="/assets/images/sc-logo.png" property="og:image" />
      </Head>
      <NextSeo
        openGraph={{ title: path }}
        // description={blog.excerpt}
        // openGraph={{ title: singleBlogData?.name, description: blog.excerpt }}
        title={`${path} | Share Car `}
      />
      <SectionPage className="z-30">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 ">
          {currentPost?.map(
            ({ id, slug, image, created_at, name }: BlogProps) => {
              const reverseUnixTime: Date = new Date(`${created_at}`);
              const date1 = format(reverseUnixTime, "dd MMMM yyyy", {
                locale: IndoLocale,
              });
              return (
                <div key={`${id}`}>
                  <Link as={`/news/${slug}`} href={`/news/[slug]`}>
                    <a>
                      <Card
                        key={id}
                        datePost={date1}
                        imgsrc={image}
                        myKey={slug}
                        title={`${name}`}
                        // description={content}
                      />
                    </a>
                  </Link>
                </div>
              );
            },
          )}
        </Container>
        <Container className=" my-12 z-30">
          <Pagination
            activePage={currentPage}
            paginate={paginate}
            postPerPage={postPerPage}
            totalPost={allBlogs?.length}
          />
        </Container>
      </SectionPage>
    </SWRConfig>
  );
};

export default Blogs;
