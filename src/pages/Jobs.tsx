import { AddJobDialog } from "@/components/AddJobDialog";
import { columns } from "@/components/jobs-listing/columns";
import { DataTable } from "@/components/jobs-listing/data-table";
import { useJobs } from "@/hooks/useJobs";

// const data: Job[] = [
//   {
//     _id: "64b2c08c92619b8e23eea284",
//     company: "Gevee",
//     position: "Clinical Specialist",
//     jobStatus: "interview",
//     jobType: "part-time",
//     jobLocation: "Wujiashan",
//   },
//   {
//     _id: "64b2c08c92619b8e23eea233",
//     company: "Feedspan",
//     position: "Automation Specialist IV",
//     jobStatus: "interview",
//     jobType: "full-time",
//     jobLocation: "Botoh",
//   },
//   {
//     _id: "64b2c08c92619b8e23eea278",
//     company: "Zazio",
//     position: "Chemical Engineer",
//     jobStatus: "interview",
//     jobType: "internship",
//     jobLocation: "Linköping",
//   },
//   {
//     _id: "64b2c08c92619b8e23eea27a",
//     company: "Skyndu",
//     position: "Senior Sales Associate",
//     jobStatus: "declined",
//     jobType: "full-time",
//     jobLocation: "Kendung Timur",
//   },
//   {
//     _id: "64b2c08c92619b8e23eea28d",
//     company: "Blognation",
//     position: "Social Worker",
//     jobStatus: "declined",
//     jobType: "full-time",
//     jobLocation: "Křenovice",
//   },
// ];

function Jobs() {
  const jobs = useJobs();
  console.log(jobs);

  return (
    <div className="px-32 pt-4 ml-64 h-screen">
      <DataTable columns={columns} data={jobs} />
      {/* <Button>Add Job</Button> */}
      <AddJobDialog />
    </div>
  );
}

export default Jobs;
