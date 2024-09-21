/** @type {import("prettier").Config} */
const config = {
  trailingComma: "none",
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  jsxSingleQuote: true,
  plugins: ["prettier-plugin-tailwindcss"]
};

export default config;
