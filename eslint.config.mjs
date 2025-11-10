// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ['./tsconfig.app.json', './tsconfig.node.json'],
                tsconfigRootDir: new URL('.', import.meta.url).pathname,
                ecmaVersion: 2022,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        extends: [
            reactX.configs['recommended-typescript'],
            reactDom.configs.recommended,
        ],
        rules: {
            'max-lines-per-function': ['error', { max: 120, skipBlankLines: true, skipComments: true }],
        },
    },
]);