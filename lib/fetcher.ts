/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import useSWR from "swr";

export async function Fetcher<JSON = any>(
  input: RequestInfo,
  // init?: RequestInit,
  lang?: string,
): Promise<JSON> {
  const resp = await fetch(
    input,
    // eslint-disable-next-line no-param-reassign
    {
      headers: {
        // "x-access-token": "sans@dev",
        "Content-Type": "aplication/json",
        "Accept-language": `${lang}`,
      },
    },
  );

  if (resp.status == 404) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return resp.json();
}

// GET banners
export const useBanners = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/banners`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Active hero banners
export const useActivePromoBanners = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/banners/type/home-promo`, locale],
    Fetcher,
    // { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};
// GET Active hero banners
export const useActiveBanners = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/banners/type/home-hero`, locale],
    Fetcher,
    // { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET locations
export const useLocations = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/locations`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Active locations
export const useActiveLocations = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/locations?active=1`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Active promo
export const useActivePromo = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/promotions?active=1`, locale],
    Fetcher,
    // { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET promo
export const usePromo = () => {
  const { data, error, ...rest } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/api/promotions`,
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET blogs
export const useBlogs = (initialData: any) => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`, locale],
    Fetcher,
    { fallbackData: initialData, refreshInterval: 20000 },
  );
  return { data, error, loading: !data && !error, ...rest };
};
// GET accep lang blogs
export const useBlogsWithLang = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`, locale],
    Fetcher,
    // { fallbackData: initialData, refreshInterval: 20000 },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET single blog
export const useBlogId = (slug: string, initialData: any) => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [
      slug ? `${process.env.NEXT_PUBLIC_APIURL}/api/blogs/slug/${slug}` : null,
      locale,
    ],
    Fetcher,
    { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Car Brands
export const useCarsBrands = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/carbrands`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Cars Types
export const useCarsTypes = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/cartypes`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET All Cars data
export const useCars = (initialData: any) => {
  const { data, error, ...rest } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_APIURL}/api/cars`,
    Fetcher,
    { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Cars data
export const useActiveCars = (initialData: any) => {
  const { data, error, ...rest } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_APIURL}/api/cars?active=1`,
    Fetcher,
    { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Resource data
export const useResource = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/resources`, locale],
    Fetcher,
    // { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};
