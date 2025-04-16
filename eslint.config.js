import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';
import { customRules } from './custom-rules.js';

// ESLint v8 configuration
export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // Base config for all files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        // React global
        React: 'readonly',
        // Cloudflare Workers globals
        Request: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        FetchEvent: 'readonly',
        ReadableStream: 'readonly',
        WritableStream: 'readonly',
        TransformStream: 'readonly',
        URL: 'readonly',
        URLPattern: 'readonly',
        URLSearchParams: 'readonly',
        caches: 'readonly',
        crypto: 'readonly',
        WebSocket: 'readonly',
        fetch: 'readonly',
        env: 'readonly',
        ASSETS: 'readonly',
        // Cloudflare types
        Env: 'readonly',
        ExecutionContext: 'readonly',
        ExportedHandler: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'custom-rules': customRules,
    },
    rules: {
      // Core ESLint rules
      'no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_', 
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true 
      }],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // React rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/self-closing-comp': 'error',
      
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // A11y rules - essential only
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-role': 'error',
      
      // Cloudflare Workers / React Router specific
      'no-restricted-globals': ['error', 'event', 'name', 'location'],
      
      // Custom rules
      'custom-rules/max-file-lines': ['error', { max: 200 }],
    },
    settings: {
      react: {
        version: '19',
      },
    },
  },
  
  // TypeScript specific config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: null, // Don't require tsconfig to avoid complexity
      }
    },
  },
  
  // Ignore files
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.wrangler/**',
      '.react-router/**',
      'public/**',
      '**/*.d.ts', // Ignore declaration files
    ],
  }
];
