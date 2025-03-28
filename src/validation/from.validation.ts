import * as z from "zod";

export const stepOneSchema = z.object({
  fullName: z.string({
    message: "Full name is required",
  }),
  email: z.string({
    message: "Email is required",
  }).email("Invalid email format"),
  phone: z
    .string({
      message: "Phone number is required",
    })
    .min(11, "Phone number must be exactly 11 digits")
    .regex(/^01[3-9]\d{8}$/, "Phone number must be a valid"),
});


export const stepTwoSchema = z.object({
  streetAddress: z.string({
    message: "Street address is required",
  }),
  city: z.string({
    message: "City is required",
  }),
  zipCode: z
    .string({
      message: "Zip code is required",
    })
});

export const stepThreeSchema = z.object({
  username: z.string({
    message: "Username is required",
  }),
  password: z.string({
    message: "Password is required",
  }).min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string({
      message: "Confirm password is required",
    })
    .min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


