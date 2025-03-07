module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
        harmattan: ["Harmattan", "sans-serif"],
        merriweather: ["Merriweather Sans", "sans-serif"],
        raleway: ["Raleway Dots", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      transform: {
        "rotate-x-90": "perspective(1000px) rotateX(90deg)",
        "rotate-x-0": "perspective(1000px) rotateX(0)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
