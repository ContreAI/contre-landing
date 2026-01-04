import nextConfig from 'eslint-config-next'

const config = [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**'],
  },
  ...nextConfig,
  {
    rules: {
      // Allow apostrophes and quotes in JSX text - they're readable and intentional
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config

