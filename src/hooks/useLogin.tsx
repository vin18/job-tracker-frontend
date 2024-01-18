import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import apiClient from "@/lib/apiClient";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { User } from "@/entities/User";
import { USER_KEY } from "@/constants/queryKey";

interface UserCredentials {
  email: string;
  password: string;
}

type IUseSignUp = UseMutateFunction<User, unknown, UserCredentials, unknown>;

const useSignIn = (): IUseSignUp => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation({
    mutationFn: (values: UserCredentials) => apiClient.post(`/login`, values),
    onSuccess: (data: any) => {
      queryClient.setQueryData([USER_KEY], data);
      queryClient.invalidateQueries({ queryKey: [USER_KEY] });
      toast({ title: "Logged in successfully" });
      navigate(`/dashboard`);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });

  return signInMutation;
};

export default useSignIn;
