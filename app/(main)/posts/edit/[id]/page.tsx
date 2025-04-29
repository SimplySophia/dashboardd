'use client';
import React, { use } from 'react';
import BackButton from "@/components/ui/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import posts from "@/data/posts";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

interface PostEditFormProps {
  params: Promise<{ id: string }>; // ✅ params is a Promise now
}

const PostsEditPage = ({ params }: PostEditFormProps) => {
  const { id } = use(params); // ✅ unwrap the Promise using React.use()

  const postId = parseInt(id, 10);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      content: post.body,
      author: post.author,
      date: post.date,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast.success(`Post updated successfully by ${data.author} on ${data.date}`);
  };

  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className="text-2xl mb-4">Edit Posts</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Content
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Content"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full dark:bg-slate-800 dark:text-white">Update Post</Button>
        </form>
      </Form>
    </>
  );
};

export default PostsEditPage;
