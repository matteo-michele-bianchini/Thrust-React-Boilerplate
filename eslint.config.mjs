// @ts-check

import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    globalIgnores(['.husky', '.react-router', 'build', 'node_modules', 'public']),
    {
        rules: {
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1
                }
            ],
            semi: ['error', 'never'],
            'no-extra-semi': 'error',
            'eol-last': ['error', 'never'],
            'quote-props': ['error', 'as-needed'],
            quotes: ['error', 'single', { avoidEscape: true }]
        }

    }
)