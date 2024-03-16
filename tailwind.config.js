import daisyui from "daisyui";
import theme from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                sunset: {
                    ...theme["sunset"],
                    "base-100": "#1A1A1A",
                    "accent": "#1A1918"
                }
            }
        ],
    },
};
