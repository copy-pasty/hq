module.exports = {
  root: true,
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "filenames-simple"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
    "jsx-a11y": {
      components: { Image: "img" },
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: true,
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "./tailwind.config.ts",
      removeDuplicates: true,
    },
  },
  ignorePatterns: [
    ".eslintrc.js",
    "next.config.js",
    "postcss.config.js",
    "node_modules/",
    "dist/",
    "build/",
    ".next/",
  ],
  rules: {
    "max-lines": [
      "warn",
      { max: 400, skipBlankLines: true, skipComments: true },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    // waiting on https://github.com/microsoft/TypeScript/issues/38347
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "import/consistent-type-specifier-style": ["error"],
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-render-return": "error",
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
    "tailwindcss/no-custom-classname": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/prop-types": "off",
    "react/void-dom-elements-no-children": "error",
    "react/function-component-definition": [
      "error",
      { namedComponents: "function-declaration" },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
  },
  overrides: [
    {
      files: "**/*.+(tsx)",
      rules: {
        "filenames-simple/naming-convention": ["error", { rule: "kebab-case" }],
      },
    },
    {
      files: "**/use*.+(tsx)",
      rules: {
        "filenames-simple/naming-convention": ["error", { rule: "camelCase" }],
      },
    },
  ],
};
