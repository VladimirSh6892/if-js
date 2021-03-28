module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  globals: {
    document: false,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-classes-per-file': ["error", 3],
    'no-plusplus': 'off',
    'no-undef': 'off',
    'no-restricted-syntax': 'off',
    'no-new': 'off',
  },
};
