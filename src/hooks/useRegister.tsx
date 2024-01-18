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
  name: string;
  lastName: string;
  email: string;
  password: string;
}

type IUseSignUp = UseMutateFunction<User, unknown, UserCredentials, unknown>;

const useRegister = (): IUseSignUp => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUpMutation } = useMutation({
    mutationFn: (values: UserCredentials) =>
      apiClient.post(`/register`, values),
    onSuccess: (data: any) => {
      queryClient.setQueryData([USER_KEY], data);
      queryClient.invalidateQueries({ queryKey: [USER_KEY] });
      toast({ title: "Registered successfully" });
      navigate(`/dashboard`);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });

  return signUpMutation;
};

export default useRegister;
