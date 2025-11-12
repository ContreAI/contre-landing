import nextConfig from 'eslint-config-next'

const config = [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**'],
  },
  ...nextConfig,
]

export default config

