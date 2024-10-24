import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email({ message: "Email address is invalid." }),
});

export const passwordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

export const signUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name is too long." }),
  email: emailSchema.shape.email,
  password: passwordSchema.shape.password,
});

export const signInSchema = z.object({
  email: emailSchema.shape.email,
  password: passwordSchema.shape.password,
});

export const resetPasswordSchema = z.object({
  email: emailSchema.shape.email,
});

export const updatePasswordSchema = z
  .object({
    password: passwordSchema.shape.password,
    confirmPassword: passwordSchema.shape.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  export const updateEmailSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    confirmEmail: z.string().email({ message: "Invalid email address." }),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails don't match",
    path: ["confirmEmail"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
export type UpdateEmailFormData = z.infer<typeof updateEmailSchema>;