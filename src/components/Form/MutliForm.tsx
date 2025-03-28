"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { stepOneSchema, stepThreeSchema, stepTwoSchema } from "@/validation/from.validation";
import { MultiStepFormData } from "@/types/index.type";
import Summary from "./Summary";
import StepProgressBar from "../StepProgressBar";

const MultiStepForm = () => {
  const { theme, setTheme } = useTheme();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { control, handleSubmit, formState: { errors }, getValues, trigger } = useForm({
    resolver: zodResolver<any | MultiStepFormData>(
      step === 1 ? stepOneSchema : step === 2 ? stepTwoSchema : step === 3 ? stepThreeSchema : stepOneSchema
    ),
    defaultValues: formData,
  });

  const onNextStep = async () => {
    const isValid = await trigger();
    if (step === 4) {
      setIsSubmitted(true);
    }

    if (isValid) {
      setFormData({
        ...formData,
        ...getValues(),
      });
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    } else {
      console.log("Validation failed. Please fill all fields correctly.");
    }
  };

  const onPrevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const onSubmit = () => {
    console.log("Form Data: ", getValues());
  };

  return (
    <div className={`max-w-3xl mx-auto mt-20 p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">Multi-Step Form</h2>

      <div className={`p-8 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
        <StepProgressBar step={step} />

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && <StepOne control={control} errors={errors} />}
          {step === 2 && <StepTwo control={control} errors={errors} />}
          {step === 3 && <StepThree control={control} errors={errors} />}
          {step === 4 && <Summary formData={getValues()} />}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={onPrevStep}
                className={`px-6 py-2 ${theme === "dark" ? "text-gray-300 bg-gray-500" : "text-gray-500 bg-gray-200"} rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition`}
              >
                Previous
              </button>
            )}
            <button
              type={isSubmitted ? "submit" : "button"}
              onClick={onNextStep}
              className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition cursor-pointer"
            >
              {step === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-green-600 dark:text-green-400">
            <h3 className="font-semibold text-xl">Form submitted successfully! Please check in the console.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
