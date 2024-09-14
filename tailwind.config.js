/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "200rem",
      },
      colors: {
        "sky-200": "#0F93FC",
        "sky-900": "#012C51",
        "neutral-800": "#0F0E0E",
        primary: "#20B15A",
        secondary: "#FFD700",
        tertiary: "#FF7F50",
        quaternary: "#FF6347",
        quinary: "#FF4500",
        senary: "#FFD700",
        septenary: "#FFD700",
        octonary: "#FFD700",
        ballgray: "#F2F2F2",
        denary: "#012C51",
        skyish: "#FFD700",
        mblue100: "#5C9BD1",
        mgreen100: "rgba(0, 128, 0, 0.2)",
      },
      backgroundColor: {
        "sky-200": "#0F93FC",
        "sky-900": "#012C51",
        "neutral-800": "#0F0E0E",
      },
      backgroundImage: {
        "explore-bg":
          "background: linear-gradient(95.76deg, #012C51 48.26%, rgba(217, 247, 190, 0.4) 139.49%)",
        "background-linear":
          "linear-gradient(109.06deg, #012C51 15.57%, #20B15A 100%)",
        "gradient-linear":
          "linear-gradient(95.12deg, #012C51 50.02%, #0F93FC 100%)",
        "gradient-item":
          "background: linear-gradient(270deg, #012C51 0%, rgba(1, 44, 81, 0.85) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "line-bg": "url('/images/lines.svg')",
        "refer-bg": "url('/images/referrectangle.png')",
      },
      screens: {
        "s-1": "600px",
        "s-2": "480px",
        "s-3": "540px",
        s4: "1000px",
        s5: "689px",
        s6: "675px",
        s7: "1023px",
      },
    },
  },
  plugins: [require("daisyui")],
};
