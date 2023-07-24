/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('/LoginBackground.png')",
      },
      colors: {
        White: "#ffffff",
        BG_Color: "#fcfcfc",
        Black: "#161313",
        Quote: "#038500",
        LightGray: "#e7e7e7",
        BlackText: "#0b0a0a",
        InputGray: "#f3f3f3",
        GrayDivider: "#cbcbcb",
        OffWhite: "#fafafa",
        RedError: "#d90000",
        DarkGrayTxt: "#9a9a9a",
        DarkGrayStats: "#6b6b6b",
        Lime: "#85e0a3",
        Lime30: "rgba(133, 224, 163, 0.3)",
        SlideBG: "#f2fff6",
        Never: "#ce6300",
        GrayPurp: "#e5e4ed",
        PrimaryPurp: "#470d92",
        DarkPurp: "#390a75",
        NotebookYellow: "#fcf7e6",
        LightPurp: "#ecdffc",
        LightPurp30: "#f3eff8",
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
