import * as z from "zod";

export const stepOneSchema = z.object({
  fullName: z.string(
    { message: "Full name is required" },
  ).min(1, "Full name is required"),
  email: z.string({
    message: "Email is required",
  }).email("Invalid email format"),
  phone: z
    .string({
      message: "Phone number is required",
    })
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export const stepTwoSchema = z.object({
  streetAddress: z.string(
    { message: "Street address is required" },
  ).min(1, "Street address is required"),
  city: z.string({
    message: "City is required",
  }).min(1, "City is required"),
  zipCode: z
    .string({
      message: "Zip code is required"
    })
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d+$/, "Zip code must contain only numbers"),
});

export const stepThreeSchema = z
  .object({
    username: z.string({
      message: "Username is required",
    }).min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
