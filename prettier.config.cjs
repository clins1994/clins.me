module.exports = {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  printWidth: 100,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
