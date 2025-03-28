"use client";

import { Controller } from "react-hook-form";

const StepTwo = ({ control }: any) => (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">Street Address</label>
      <Controller
        name="streetAddress"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your street address"
          />
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">City</label>
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your city"
          />
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Zip Code</label>
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your zip code"
          />
        )}
      />
    </div>
  </div>
);

export default StepTwo;
