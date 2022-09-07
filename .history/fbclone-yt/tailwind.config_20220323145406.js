module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: MediaCapabilities, // or 'media'  or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: [],
};