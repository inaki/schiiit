/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                background: "var(--color-background)",
                color: "var(--color-color)",
                "text-secondary": "var(--color-text-secondary)",
                "text-tertiary": "var(--color-text-tertiary)",
            },
        },
    },
    variants: {},
    plugins: [],
};
