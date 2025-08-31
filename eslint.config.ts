import eslintPluginPrettier from 'eslint-config-prettier'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'out/',
      'coverage/',
      '*.config.json',
      '*.log',
      '*.tmp',
      '*.temp',
      '.env',
      '.env.*.local',
      '.vscode/',
      '.idea/',
      '.DS_Store',
      '*.swp',
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      '.nyc_output/',
      'Thumbs.db',
      'public/',
      'test/**/*.snap',
      'src/assets/',
      '*.min.js',
      '.*'
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint
    },
    rules: {
      'semi': ['error', 'never'],
      'comma-dangle': [2, 'always-multiline'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error'
    }
  },
  eslintPluginPrettier
]