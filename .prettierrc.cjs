/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  tabWidth: 2,
  trailingComma: "es5",

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
