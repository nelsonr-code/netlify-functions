module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      }
    }
  ]
}