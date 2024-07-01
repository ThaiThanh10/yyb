/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        backgroundImage: {
            banner: `url('/public/Group 91.png')`,
            intro: "url('/public/Group 92.png')",
            roadmap: "url('/public/table 1.png')",
            team: "url('/public/Group 94.png')",
            team2: "url('/public/Layer 1 copy.png')",
        },
    },
    plugins: [],
}
