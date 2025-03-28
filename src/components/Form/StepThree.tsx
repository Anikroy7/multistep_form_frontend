"use client";

import { Controller } from "react-hook-form";

const StepThree = ({ control }: any) => (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">Username</label>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your username"
          />
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Password</label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <input
            type="password"
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Confirm Password</label>
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <input
            type="password"
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
          />
        )}
      />
    </div>
  </div>
);

export default StepThree;
