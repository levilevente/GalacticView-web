import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended, // Spread the recommended TS configs

  // Add a new configuration object for custom rules
  {
    rules: {
      // Enforce a maximum of 120 lines in a function
      "max-lines-per-function": ["error", {
        "max": 120,
        "skipBlankLines": true, // Optional: ignore blank lines
        "skipComments": true     // Optional: ignore comment lines
      }]
    }
  }
]);