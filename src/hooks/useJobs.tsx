import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { JOBS_KEY } from "@/constants/queryKey";
import { Job } from "@/entities/Job";

interface IReturnValue {
  data: Job[];
  message: string;
}

export function useJobs(): Job[] {
  const { data: jobs } = useQuery<IReturnValue>({
    queryKey: [JOBS_KEY],
    queryFn: (): Promise<IReturnValue> =>
      apiClient.get("/jobs").then((response) => response.data),
  });

  return jobs?.data ?? [];
}
