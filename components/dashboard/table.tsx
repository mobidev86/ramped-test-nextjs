import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JobPost, PaginationTypes } from "@/types";
import { PaginationJobs } from "./pagination-jobs";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

interface TableProps {
  jobs: JobPost[];
  pagination: PaginationTypes;
  onPageClick: (page: number) => void;
  setSelectedJob: Dispatch<SetStateAction<JobPost | null>>;
}

export const TableCard = ({
  jobs,
  pagination,
  onPageClick,
  setSelectedJob,
}: TableProps) => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Available Jobs</CardTitle>
        <CardDescription>Click on them to see more details.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Job Name</TableHead>
              <TableHead className="hidden sm:table-cell">
                Company Name
              </TableHead>
              <TableHead className="hidden sm:table-cell">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs?.map((job, index) => (
              <TableRow key={index} className="bg-accent">
                <TableCell className="hidden sm:table-cell">
                  {job.job_name}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {job.company_name}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    variant={"outline"}
                    onClick={() => setSelectedJob(job)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        {pagination?.totalPages > 1 && (
          <PaginationJobs pagination={pagination} onPageClick={onPageClick} />
        )}
      </CardFooter>
    </Card>
  );
};
