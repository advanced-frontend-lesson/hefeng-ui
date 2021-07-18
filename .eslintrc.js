module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      tsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "vue/max-attributes-per-line": "off",
  },
};
