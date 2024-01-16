/* eslint-disable @next/next/no-img-element */
import * as React from "react";
// import Image from "next/image";
import medsos from "~/lib/data/medsos.json";

type MedsosProps = {
  href: string;
  source?: string;
  name: string;
};

export const VerticalMedsos: React.FC = () => {
  return (
    <div className="hidden flex-none md:inline-flex flex-col items-center justify-center space-y-4 lg:space-y-8 mx-4">
      {medsos?.map(({ href, source, name }: MedsosProps) => (
        <a
          key={`${name}`}
          href={href}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          {/* <figure>
            <Image alt={`${name}`} height={26} src={`${source}`} width={26} />
          </figure> */}
          <img alt={name} height={26} src={source} width={26} />
        </a>
      ))}
    </div>
  );
};
