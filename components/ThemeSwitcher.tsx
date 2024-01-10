"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IoSunnySharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            aria-label="theme toggle button"
            className="duration-100 hover:-translate-y-0.5 focus:outline-none text-dark dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" || theme === "dark" ? <IoSunnySharp /> : <FiMoon />}
        </button>
    );
};

export default ThemeSwitcher;
