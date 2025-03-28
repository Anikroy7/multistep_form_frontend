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
          <div>
            <input
              {...field}
              className={`w-full p-3 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        )}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700">Phone Number</label>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        )}
      />
    </div>
  </div>
);

export default StepOne;
