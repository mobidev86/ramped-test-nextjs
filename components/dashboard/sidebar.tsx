import { JobPost } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { JobPoint } from "./job-point";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {Cross1Icon} from '@radix-ui/react-icons'
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  job: JobPost;
  setSelectedJob: Dispatch<SetStateAction<JobPost | null>>;
}

export const Sidebar = ({ job , setSelectedJob}: SidebarProps) => {
  return (
    <Card className="relative">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{job?.job_name}</CardTitle>
        <Button variant={"link"} className="absolute top-3 right-3" onClick={() => setSelectedJob(null)}>
            <Cross1Icon />
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-y-4 list-disc ml-4">
          {Object.entries(job?.content)?.map(([key, value]) => (
            <JobPoint key={key} title={key} value={value} />
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a
          href={job.post_apply_url}
          target="_blank"
          className="inline-block w-ful mx-auto"
        >
          <Button className="flex gap-x-2">
            <span>Apply</span>
            <span>
              <ExternalLinkIcon />
            </span>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
