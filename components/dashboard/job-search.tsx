"use client";

import { useEffect, useState } from "react";
import { Search } from "./search";
import { TableCard } from "./table";
import { JobPost, PaginationTypes } from "@/types";
import { EmptyCard } from "./empty-card";
import { Jobs } from "@/actions/jobs";
import { Sidebar } from "./sidebar";
import { LoadingCard } from "./loading-card";

export const JobSearch = () => {
  const [result, setResult] = useState<JobPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginationTypes>({
    totalPages: 1,
    currentPage: 1,
  });
  const [query, setQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);

  useEffect(() => {
    onQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onQuery = async (page = 1) => {
    setIsLoading(true);
    setSelectedJob(null);
    const res = await Jobs(query, page);
    setIsLoading(false);
    if (res.data) {
      setResult(res.data);
      if (res.pagination) setPagination(res?.pagination);
    }
    if (res.error) {
      setResult([]);
      setPagination({ totalPages: 1, currentPage: 1 });
    }
  };

  const onPAginationClick = async (page: number) => {
    onQuery(page);
    
  };

  return (
    <div className="space-y-20">
      <div className="w-full flex items-center mx-auto">
        <Search onQuery={onQuery} query={query} setQuery={setQuery} />
      </div>
      <div className="w-full flex gap-x-16">
        <div className="w-1/2 mx-auto">
          {result?.length > 0 ? (
            <TableCard
              jobs={result}
              pagination={pagination}
              onPageClick={onPAginationClick}
              setSelectedJob={setSelectedJob}
            />
          ) : isLoading ? (
            <div className="w-full flex justify-center items-center"><LoadingCard /></div>
          ) : (
            <EmptyCard />
          )}
        </div>

        {selectedJob && (
          <div className="w-1/2">
            <Sidebar job={selectedJob} setSelectedJob={setSelectedJob} />
          </div>
        )}
      </div>
    </div>
  );
};
