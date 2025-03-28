"use client";

import { Controller } from "react-hook-form";

const StepTwo = ({ control, errors }: any) => (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">Street Address</label>
      <Controller
        name="streetAddress"
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              className={`w-full p-3 border border-gray-300 rounded-md ${
                errors.streetAddress ? "border-red-500" : ""
              }`}
              placeholder="Enter your street address"
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>
            )}
          </div>
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">City</label>
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              className={`w-full p-3 border border-gray-300 rounded-md ${
                errors.city ? "border-red-500" : ""
              }`}
              placeholder="Enter your city"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Zip Code</label>
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              type="number"
              className={`w-full p-3 border border-gray-300 rounded-md ${
                errors.zipCode ? "border-red-500" : ""
              }`}
              placeholder="Enter your zip code"
            />
            {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
          </div>
        )}
      />
    </div>
  </div>
);

export default StepTwo;
