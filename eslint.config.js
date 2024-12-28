import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
  js.configs.recommended,
  eslintPluginPrettierRecommended,
];
