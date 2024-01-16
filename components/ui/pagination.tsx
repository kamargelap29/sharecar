/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import cn from "classnames";

interface PaginationProps {
  postPerPage: any;
  totalPost: any;
  activePage?: number;
  paginate: (number: number) => void | undefined;
}

export function Pagination({
  postPerPage,
  totalPost,
  paginate,
  activePage,
}: PaginationProps) {
  const pageNumber = [];
  const marginPages = Math.ceil(totalPost / postPerPage);
  for (let index = 1; index <= marginPages; index++) {
    pageNumber.push(index);
  }

  return (
    <div className="mx-auto flex flex-wrap justify-center items-center gap-4">
      {pageNumber.map((number: number) => (
        <div key={`${number}`}>
          <button
            aria-label="btn pagination"
            className={cn(
              activePage == number
                ? "bg-sc-blue ring-sc-light text-sc-light"
                : "",
              "rounded-full ring-2 ring-sc-green hover:ring-sc-light hover:bg-sc-blue active:bg-sc-green active:text-sc-light text-sc-dark hover:text-sc-light px-6 py-4",
            )}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
}
