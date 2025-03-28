"use client";

import { Controller } from "react-hook-form";

const StepThree = ({ control, errors }: any) => (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">Username</label>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              className={`w-full p-3 border border-gray-300 rounded-md ${
                errors.username ? "border-red-500" : ""
              }`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Password</label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div>
            <input
              type="password"
              {...field}
              className={`w-full p-3 border border-gray-300 rounded-md ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Confirm Password</label>
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <div>
            <input
              type="password"
              {...field}
              className={`w-full p-3 border border-gray-300 rounded-md ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>
        )}
      />
    </div>
  </div>
);

export default StepThree;
