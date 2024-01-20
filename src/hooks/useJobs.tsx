import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { JOB_KEY } from "@/constants/queryKey";
import { Job } from "@/entities/Job";

export function useJobs(): Job[] {
  const { data: jobs } = useQuery<Job[]>({
    queryKey: [JOB_KEY],
    queryFn: (): Promise<Job[]> =>
      apiClient.get("/jobs").then((response) => response.data),
  });

  return jobs ?? [];
}
