import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/entities/User";
import apiClient from "@/lib/apiClient";
import {
  getUserFromLocalStorage,
  removeUser,
  saveUser,
} from "@/lib/saveUserToLocalStorage";
import { USER_KEY } from "@/constants/queryKey";

export function useUser(): User | null {
  const { data: user } = useQuery<User | null>({
    queryKey: [USER_KEY],
    queryFn: (): Promise<User | null> =>
      apiClient.get("/users/me").then((response) => response.data),
    initialData: getUserFromLocalStorage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (!user) removeUser();
    else saveUser(user);
  }, [user]);

  return user ?? null;
}
