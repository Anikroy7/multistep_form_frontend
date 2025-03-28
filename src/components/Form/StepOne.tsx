"use client";

import { Controller } from "react-hook-form";

const StepOne = ({ control, errors }: any) => (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">Full Name</label>
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Phone Number</label>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        )}
      />
    </div>
  </div>
);

export default StepOne;
