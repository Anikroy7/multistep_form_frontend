"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { stepOneSchema, stepThreeSchema, stepTwoSchema } from "@/validation/from.validation";
import { MultiStepFormData } from "@/types/index.type";
import Summary from "./Summary";

const MultiStepForm = () => {
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
    console.log(errors);
    console.log(step);

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

  const onSubmit = (data: any) => {
    console.log("Form data", data);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">Multi-Step Form</h2>

      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`rounded-full h-12 w-12 flex justify-center items-center border-2 transition duration-300 ease-in-out ${step >= num ? "bg-teal-600 text-white border-teal-600" : "bg-gray-300 text-gray-500 border-gray-300"
                  }`}
              >
                {num}
              </div>
              {num < 4 && (
                <div
                  className={`flex-auto h-1 transition duration-300 ease-in-out ${step > num ? "bg-teal-600" : "bg-gray-300"}` }
                ></div>
              )}
            </div>
          ))}
        </div>

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
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                Previous
              </button>
            )}
            <button
              type={step === 4 ? "submit" : "button"}
              onClick={onNextStep}
              className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              {step === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-green-600">
            <h3 className="font-semibold text-xl">Form submitted successfully! Please check in the console.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
