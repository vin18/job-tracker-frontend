"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (values: z.infer<typeof registerSchema>) =>
      axios.post(`http://localhost:5000/api/v1/auth/registeer`, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      toast({
        title: "Registered successfully",
      });
      navigate(`/dashboard`);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });
};

export default function Register() {
  const { mutate: register } = useRegister();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>): any {
    register(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Vinit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Raut" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="vinit@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-4" type="submit">
          Create account
        </Button>
      </form>
    </Form>
  );
}
