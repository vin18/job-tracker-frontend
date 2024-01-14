"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import axios from "axios"

const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("This is not a valid email"),
    password: z
        .string()
        .min(1, { message: 'Password is required' })
})

const useLogin = () => {
    const queryClient = useQueryClient()
  
    return useMutation({
      mutationFn: (values: z.infer<typeof loginSchema>) => axios.post(`http://localhost:5000/api/v1/auth/login`, values),
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['auth'] })
        console.log("Logged in", data)
      },
      onError: (error) => {
        console.log("Error", error)
      }
    })
}

export default function Login() {
    const { mutate: login } = useLogin()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>): any {
        login(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card className="mx-auto max-w-sm">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Login</CardTitle>
                        <CardDescription>Enter your credentials to login to your account</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" type="submit">Login to your account</Button>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

