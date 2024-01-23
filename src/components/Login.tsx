"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import useLogin from "@/hooks/useLogin";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const login = useLogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>): any {
    login(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Email Address</FormLabel>
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
            <FormItem className="mb-6">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* TODO: Add loading state */}
        <Button variant="secondary" className="w-full mb-4" type="submit">
          Login as guest user
        </Button>

        {/* TODO: Add loading state */}
        <Button className="w-full" type="submit">
          Login to your account
        </Button>
      </form>
    </Form>
  );
}
