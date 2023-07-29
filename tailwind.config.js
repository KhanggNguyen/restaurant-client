/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                "slight-gray": "#F5F5F5",
            },
            height: {
                448: "112rem",
                456: "114rem",
                476: "119rem",
            },
            minWidth: {
                80: "20rem",
            },
            minWidth: {
                80: "10rem",
            },
        },
    },
    plugins: [],
};
