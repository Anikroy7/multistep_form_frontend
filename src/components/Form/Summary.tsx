"use client";

const Summary = ({ formData }: any) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-center mb-6">Form Summary</h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Full Name:</span>
          <span>{formData.fullName}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Email:</span>
          <span>{formData.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Phone Number:</span>
          <span>{formData.phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Street Address:</span>
          <span>{formData.streetAddress}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">City:</span>
          <span>{formData.city}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Zip Code:</span>
          <span>{formData.zipCode}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Username:</span>
          <span>{formData.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
