module.exports = {
  arrowParens: 'always',
  jsxBracketSameLine: false,
  endOfLine: 'crlf',
  printWidth: 90,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',

  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel-flow',
      },
    },
  ],
};
