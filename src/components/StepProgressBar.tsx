import { useTheme } from "next-themes";

const StepProgressBar = ({ step }: { step: number }) => {
    const { theme } = useTheme();
    const steps = ["Personal Information", "Address Details", "Account Setup", "Summary"];

    return (
        <div className="mx-auto md:min-w-3xl p-4 mb-20">
            <div className="flex items-center">
                {steps.map((label, index) => (
                    <div key={index} className="flex items-center w-full relative">
                        <div
                            className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center border-2 ${step >= index + 1
                                ? "bg-teal-600 text-white border-teal-600"
                                : "border-gray-300 text-gray-500"
                                }`}
                        >
                            {index + 1}
                        </div>
                        <div
                            className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${step >= index + 1 ? "text-teal-600" : "text-gray-500"
                                }`}
                        >
                            {label}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step > index + 1 ? "border-teal-600" : "border-gray-300"
                                    }`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepProgressBar;
