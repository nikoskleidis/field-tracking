module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 10,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/display-name": 0,
    "no-unused-vars": 1,
    "no-console": 0,
    "react/prop-types": 0,
    "no-extra-boolean-cast": 0
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-vars": 0,
        "no-undef": 0
      }
    }
  ]
}
