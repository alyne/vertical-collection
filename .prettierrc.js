'use strict';

module.exports = {
  trailingComma: 'es5',
  printWidth: 100,
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
  ],
};
