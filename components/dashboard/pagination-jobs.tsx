"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { PaginationTypes } from "@/types";

interface PaginationProps {
  pagination: PaginationTypes
  onPageClick: (page: number) => void;
}

export const PaginationJobs = ({
  pagination,
  onPageClick,
}: PaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="flex items-center gap-x-2">
          {Array.from({ length: pagination?.totalPages }, (_item, index) => (
            <PaginationLink
              className={
                index + 1 === pagination?.currentPage
                  ? "bg-black text-white cursor-pointer"
                  : "cursor-pointer"
              }
              key={index}
              onClick={() => onPageClick(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          ))}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
