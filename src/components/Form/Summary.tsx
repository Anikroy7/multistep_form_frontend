"use client";

const Summary = ({ formData }: any) => {
  return (
    <div className="p-6  shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-center mb-6">Form Summary</h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium ">Full Name:</span>
          <span>{formData.fullName}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium ">Email:</span>
          <span>{formData.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium ">Phone Number:</span>
          <span>{formData.phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium ">Street Address:</span>
          <span>{formData.streetAddress}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium ">City:</span>
          <span>{formData.city}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium ">Zip Code:</span>
          <span>{formData.zipCode}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium ">Username:</span>
          <span>{formData.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
