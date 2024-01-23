import { toast } from "@/components/ui/use-toast";
import apiClient from "@/lib/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { JOBS_KEY } from "@/constants/queryKey";
import { Job } from "@/entities/Job";

// TODO: Fix return type
const useAddJob = (setOpen: any): any => {
  const queryClient = useQueryClient();

  const { mutate: addJobMutation, isPending: isLoading } = useMutation({
    mutationFn: (values: Job) => apiClient.post(`/jobs`, values),
    onSuccess: (data: any) => {
      queryClient.setQueryData([JOBS_KEY], data);
      queryClient.invalidateQueries({ queryKey: [JOBS_KEY] });
      toast({ title: "Job added!" });
      setOpen(false);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });

  return { addJobMutation, isLoading };
};

export default useAddJob;
