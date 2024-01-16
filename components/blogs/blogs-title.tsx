import * as React from "react";

type Props = {
  children?: React.ReactNode;
  title: string;
};

const BlogTitle = ({ title }: Props) => {
  return (
    <h1 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center text-sc-dark ">
      {title}
    </h1>
  );
};

export default BlogTitle;
