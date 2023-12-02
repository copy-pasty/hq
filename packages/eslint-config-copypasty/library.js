module.exports = {
  root: true,
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: true,
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
  ignorePatterns: [".eslintrc.js", "node_modules/", "dist/", "build/"],
  rules: {
    "max-lines": [
      "warn",
      { max: 400, skipBlankLines: true, skipComments: true },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    // waiting on https://github.com/microsoft/TypeScript/issues/38347
    "@typescript-eslint/restrict-template-expressions": "off",
    "import/consistent-type-specifier-style": ["error"],
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
