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
    'no-plusplus': 'off',
    'eslint-disable no-undef': 'off',
    'no-restricted-syntax': ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
  },
};
