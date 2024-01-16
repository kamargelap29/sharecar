/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
// import { GetStaticPaths } from "next";
// import ErrorPage from "next/error";
// import markdownToHtml from "~/lib/markdownToHtml";
// import { getBlogBySlug, getAllBlogs } from "~/lib/api";
import BlogProps from "~/types/blogs";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import { NotFound, SectionPage } from "~/components/ui";
import { Container } from "~/components/layout";
import blogsStyles from "~/styles/blogs-styles.module.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import format from "date-fns/format";
import IndoLocale from "date-fns/locale/id";
import { BackButton } from "~/components/ui/backbutton";
import BlogTitle from "~/components/blogs/blogs-title";
import Image from "next/image";
// import { useBlogId } from "~/lib/fetcher";
// import { SWRConfig } from "swr";
// import { useIntl } from "react-intl";

type BlogPropsData = {
  slugBlogData: BlogProps[];
};

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/blogs/slug/${params.slug}`,
  );
  const slugBlogData = await res.json();

  return {
    props: {
      slugBlogData,
      // fallback: {
      //   slugs: slugBlogData,
      // },
    },
  };
}
export async function getStaticPaths({ locales }: any) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`);
  const data = await res.json();
  const allBlogs = data.data;
  const paths = allBlogs
    ?.map((val: any) =>
      locales.map((locale: any) => ({
        params: { slug: val.slug },
        locale,
      })),
    )
    .flat();

  return {
    paths,
    fallback: true,
  };
}

const Blog = ({ slugBlogData }: any) => {
  const router = useRouter();
  // const slugPage: any = router.query.slug;
  // console.log(fallback);

  // fetch data
  const path =
    typeof window !== "undefined" ? window.location.pathname.slice(1) : "";

  // const { data: slugData, error, loading } = useBlogId(slugPage, fallback);
  if (slugBlogData === "undefined") return <NotFound contentdata={path} />;
  if (!slugBlogData) return <h1 className="animate-bounce z-30">Loading...</h1>;

  const singleBlogData = { ...slugBlogData.data };

  // const router = useRouter();
  // if (!router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }
  // console.log(singleBlogData);

  const curDate = singleBlogData?.created_at;
  const dataDate: Date = new Date(curDate);
  const indoDate = format(dataDate, "dd MMMM yyyy", {
    locale: IndoLocale,
  });

  return (
    // <SWRConfig value={{ fallback }}>
    <article>
      <Head>
        <title>{singleBlogData?.name} | Share Car </title>
        <meta content={singleBlogData?.image} property="og:image" />
      </Head>
      <NextSeo
        openGraph={{ title: singleBlogData?.name }}
        // description={blog.excerpt}
        // openGraph={{ title: singleBlogData?.name, description: blog.excerpt }}
        title={`${singleBlogData?.name} | Share Car `}
      />

      <Container className="ml-0 md:ml-28">
        <BackButton href={`/news`} />
      </Container>
      <SectionPage className="z-30 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-[616px] mt-6 text-center">
          <BlogTitle title={singleBlogData?.name} />
          {/* <h1 className="text-sc-dark font-semibold text-2xl md:text-4xl">
              {singleBlogData?.name}
            </h1> */}
          <p className="text-lg md:text-2xl mt-8">{indoDate}</p>
        </div>
        {/* image */}
        <div className="my-16 w-full max-w-3xl">
          <figure className="relative aspect-1 ">
            <Image
              alt={`image-${singleBlogData?.image}`}
              // blurDataURL={`/_next/image?url=${singleBlogData?.image}&w=16&q=1`}
              layout="fill"
              // height="570"
              // width="1264"
              // placeholder="blur"
              src={`${singleBlogData?.image}`}
            />
            {/* <img
              alt={`image-${singleBlogData?.image}`}
              aria-label="image"
              src={singleBlogData?.image}
            /> */}
          </figure>
        </div>
        <Container className="z-30">
          <div
            className={blogsStyles["blogs"]}
            dangerouslySetInnerHTML={{ __html: singleBlogData?.content }}
          />
        </Container>
      </SectionPage>
    </article>
    // </SWRConfig>
  );
};

export default Blog;

// type Params = {
//   params: {
//     slug: string;
//   };
// };

// export const getStaticProps = async ({ params }: Params) => {
//   const blog = getBlogBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]);
//   const content = await markdownToHtml(blog.content || "");

//   return {
//     props: {
//       blog: {
//         ...blog,
//         content,
//       },
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const blogs = getAllBlogs(["slug"]);

//   return {
//     paths: blogs.map((blog) => {
//       return {
//         params: {
//           slug: blog.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// };
