/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        {
            // This plugin will add the @layer directive to Tailwind CSS
            name: "layer",
            function() {
                return {
                    "@layer": function (name) {
                        return {
                            [name]: {},
                        };
                    },
                };
            },
        },
        {
            // This plugin will add the @mixin directive to Tailwind CSS
            name: "mixin",
            function() {
                return {
                    "@mixin": function (name, args) {
                        return {
                            [name]: args,
                        };
                    },
                };
            },
        },
    ],
};
