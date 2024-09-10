"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  comment: z.string().min(1, {
    message: "Comment cannot be empty.",
  }),
});

const defaultValues = {
  username: "",
  email: "",
  comment: "",
};

export function MyForm({ className }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values) {
    toast.success(`Thanks for your comment! \n ${values.username}`);
    console.log(values);
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <div>
        <Toaster />
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-8 max-w-md ${className}`}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel
                className={`font-semibold ${
                  fieldState.error ? "text-red-500" : "text-gray-700"
                }`}
              >
                Username
              </FormLabel>
              <FormControl>
                <Input
                  className={`border-b-2 ${
                    fieldState.error
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-gray-500"
                  } transition-all duration-300 placeholder-gray-400 focus:outline-none bg-transparent`}
                  placeholder="Your Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel
                className={`font-semibold ${
                  fieldState.error ? "text-red-500" : "text-gray-700"
                }`}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className={`border-b-2 ${
                    fieldState.error
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-gray-500"
                  } transition-all duration-300 placeholder-gray-400 focus:outline-none bg-transparent`}
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel
                className={`font-semibold ${
                  fieldState.error ? "text-red-500" : "text-gray-700"
                }`}
              >
                Comment
              </FormLabel>
              <FormControl>
                <Textarea
                  className={`border-b-2 ${
                    fieldState.error
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-gray-500"
                  } transition-all duration-300 placeholder-gray-400 focus:outline-none bg-transparent`}
                  placeholder="Your Comment"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-gray-800 text-white hover:bg-green-700 transition-colors duration-300 w-full"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
