module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'next',
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  rules: {
    'max-depth': ['error', 2],
    indent: 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'max-params': ['error', 3],
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
