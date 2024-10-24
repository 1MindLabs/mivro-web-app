"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { constructMetadata } from "@/lib/utils";
import {
  UpdateEmailFormData,
  updateEmailSchema,
} from "@/utils/form-schema"; // This schema should be created like updatePasswordSchema
import { zodResolver } from "@hookform/resolvers/zod";
import { Metadata } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateEmail } from "@/app/(auth)/actions"; // Assuming you're using the same API to update the user
import { useState } from "react";
import { toast } from "sonner";

// Metadata for SEO
export const metadata: Metadata = constructMetadata({
  title: "Change Email",
  description: "Update your account email address",
  canonical: "/change-email",
});

const ChangeEmailForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<UpdateEmailFormData>({
    resolver: zodResolver(updateEmailSchema),
    defaultValues: {
      email: "",
      confirmEmail: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleChangeEmail: SubmitHandler<UpdateEmailFormData> = async () => {
    if (isSubmitting) return;
    setErrorMessage(null);

    try {
      const data = form.getValues();
      const response = await updateEmail(data); // Assuming the same function handles email update
      if (response?.error) {
        setErrorMessage(response.error);
      } else {
        toast.success("Email updated successfully.");
        form.reset();
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleChangeEmail)}
        className="mt-12 space-y-6 px-6 md:px-0"
      >
        {/* New Email Input */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">New Email</FormLabel>
              <FormControl>
                <Input id="email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Email Input */}
        <FormField
          name="confirmEmail"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirmEmail">Confirm New Email</FormLabel>
              <FormControl>
                <Input id="confirmEmail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Error Message */}
        {errorMessage && (
          <p className="text-center text-sm text-red-500">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <Button
          className="mt-6 w-full rounded-md bg-primary-700 text-white-50 hover:bg-primary-800 hover:shadow-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating email..." : "Change Email"}
        </Button>
      </form>
    </Form>
  );
};

export default ChangeEmailForm;
