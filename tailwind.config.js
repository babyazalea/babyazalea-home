module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Noto Serif KR"],
    },
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            code: {
              padding: "0.5rem",
              boxSizing: "border-box",
              borderRadius: "0.3rem",
              "&:after": {
                display: "none"
              },
              "&:before": {
                display: "none"
              }
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
