import * as React from "react";
// import Meta from "../meta";
import { ScrollArrow, SocialMedia } from "~/components/ui";
import Footer from "../ui/footer";
import { Navigation } from "./navigation";
// import Header from "./ui/header";

type LayoutProps = {
  preview?: boolean;
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Meta /> */}
      <main className="flex flex-col items-center">
        <Navigation />
        {children}
        <Footer />
        <SocialMedia />
        <ScrollArrow />
      </main>
    </>
  );
};
