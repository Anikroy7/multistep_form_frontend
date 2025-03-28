"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const stepOneSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .min(11, "Phone number must be exactly 11 digits")
    .regex(/^01[3-9]\d{8}$/, "Phone number must be a valid Bangladeshi number starting with 01 and followed by 8 digits"),
});

const stepTwoSchema = z.object({
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d{5}$/, "Zip code must contain only numbers"),
});

const stepThreeSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Create form instances for each step
  const { control, handleSubmit, formState: { errors }, setValue, getValues, trigger } = useForm({
    resolver: zodResolver(
      step === 1 ? stepOneSchema : step === 2 ? stepTwoSchema : stepThreeSchema
    ),
    defaultValues: formData,
  });

  const onNextStep = async () => {
    const isValid = await trigger(); 
    console.log(errors); 

    if (isValid) {
      setFormData({
        ...formData,
        ...getValues(), 
      });
      setStep((prev) => (prev < 3 ? prev + 1 : prev)); 
    } else {
      console.log("Validation failed. Please fill all fields correctly");
    }
  };

  const onPrevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev)); 
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">Multi-Step Form</h2>

      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`rounded-full h-12 w-12 flex justify-center items-center border-2 transition duration-300 ease-in-out ${
                  step >= num ? "bg-teal-600 text-white border-teal-600" : "bg-gray-300 text-gray-500 border-gray-300"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`flex-auto h-1 transition duration-300 ease-in-out ${step > num ? "bg-teal-600" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && <StepOne control={control} errors={errors}/>}
          {step === 2 && <StepTwo control={control} errors={errors}/>}
          {step === 3 && <StepThree control={control} errors={errors}/>}

         

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={onPrevStep}
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                Previous
              </button>
            )}
            <button
              type={step === 3 ? "submit" : "button"}
              onClick={onNextStep}
              className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-green-600">
            <h3 className="font-semibold text-xl">Form submitted successfully!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
