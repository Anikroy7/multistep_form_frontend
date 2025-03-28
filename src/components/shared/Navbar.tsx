"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const toggleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav className={`sticky top-0 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <Link href="/" className={`flex items-center py-5 px-2 ${theme === "dark" ? "text-white" : "text-gray-700"} hover:text-gray-900`}>
                                <span className="text-2xl font-bold text-teal-500">Multi-Step Form</span>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button onClick={toggleDarkMode} className="p-2 rounded-full">
                                {theme === "dark" ? (
                                    <FaSun size={20} className="text-yellow-500 dark:text-yellow-300" />
                                ) : (
                                    <FaMoon size={20} className="text-gray-700 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
