import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectTrigger } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import useAddJob from "@/hooks/useAddJob";
import { useState } from "react";

enum JOB_STATUS {
  PENDING = "PENDING",
  INTERVIEW = "INTERVIEW",
  DECLINED = "DECLINED",
}

enum JOB_TYPE {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  INTERNSHIP = "INTERNSHIP",
}

const addJobSchema = z.object({
  company: z.string().min(1, { message: "Company is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  jobStatus: z.string(),
  jobType: z.string(),
  jobLocation: z.string(),
});

const JOB_STATUS_VALUES = [
  JOB_STATUS.PENDING,
  JOB_STATUS.INTERVIEW,
  JOB_STATUS.DECLINED,
];

const JOB_TYPE_VALUES = [
  JOB_TYPE.FULL_TIME,
  JOB_TYPE.PART_TIME,
  JOB_TYPE.INTERNSHIP,
];

const convertJobType = (value: string) => {
  const text = value.toLowerCase().split("_").join(" ");
  console.log(text);
  return text;
};

export function AddJobDialog() {
  const [open, setOpen] = useState(false);
  const { addJobMutation, isLoading } = useAddJob(setOpen);

  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      company: "",
      position: "",
      jobStatus: JOB_STATUS.PENDING,
      jobType: JOB_TYPE.FULL_TIME,
      jobLocation: "",
    },
  });

  function onSubmit(values: z.infer<typeof addJobSchema>): any {
    addJobMutation(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Job</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Blackbox" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobLocation"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Job Location</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="jobStatus"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="mr-3">Job Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border border-gray-300 py-2 px-4 rounded">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {JOB_STATUS_VALUES.map((el: string) => (
                            <SelectItem value={el}>
                              {el.toLowerCase()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="mr-3">Job Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border border-gray-300 py-2 px-4 rounded">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {JOB_TYPE_VALUES.map((el: string) => (
                            <SelectItem value={el}>
                              {convertJobType(el)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button disabled={isLoading} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
