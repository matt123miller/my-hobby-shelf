module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  env: {
    es2022: true
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn"
  }
};
