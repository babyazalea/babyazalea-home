module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontWeight: 300,
            },
            code: {
              color: "#495057",
              backgroundColor: "#e9ecef",
              borderRadius: "0.5rem",
              padding: "0.3rem",
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
            },
            strong: {
              fontWeight: 400,
            }
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
