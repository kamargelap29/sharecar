import Image from "next/image";
import * as React from "react";
import { Calendar } from "./icons";
// import moment from "moment";

type CardProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  myKey?: string;
  datePost?: Date | string;
  imgsrc?: string | undefined;
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  myKey,
  datePost,
  imgsrc,
}) => {
  // const datePost = moment(new Date()).format("DD MMMM YYYY");
  // console.log(moment(new Date()).locale("id"));
  // console.log(title);

  return (
    <div
      key={myKey}
      className="card w-full h-full bg-sc-light shadow-xl ring-2 ring-sc-blue"
    >
      <div className="px-[37px] py-[29px]">
        <figure className="relative aspect-1">
          <Image alt={`alt-${imgsrc}`} layout="fill" src={`${imgsrc}`} />
          {/* <img src={imgsrc} alt={`alt-${imgsrc}`} className="rounded-xl" /> */}
        </figure>
      </div>
      <div className="card-body items-left text-left space-y-4">
        <div className="flex items-center gap-x-4">
          {React.createElement(Calendar, { width: "24px", height: "24px" })}
          <span>{`${datePost}`}</span>
        </div>
        <h2 className="card-title text-sc-dark">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">{children}</div>
      </div>
    </div>
  );
};
