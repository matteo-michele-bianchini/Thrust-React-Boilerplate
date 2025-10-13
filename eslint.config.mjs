// @ts-check

import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    globalIgnores(['.husky', '.react-router', 'build', 'node_modules', 'public']),
    {
        rules: {
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1
                }
            ],
            'comma-dangle': ['error', 'never'],
            'eol-last': ['error', 'never'],
            'no-extra-semi': 'error',
            'quote-props': ['error', 'as-needed'],
            quotes: ['error', 'single', { avoidEscape: true }],
            semi: ['error', 'never']
        }
    },
    {
        files: ['app/components/**'],
        rules: {
            quotes: 'off'
        }
    }
)