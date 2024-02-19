module.exports = {
  'env': {
    'browser': true,
    'node': true,
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 'latest',
  },
  'rules': {
    'require-jsdoc': 0,
    'indent': ['error', 2],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'never'],
    'object-curly-spacing': [2, 'always'],
    'eol-last': ['error', 'always']
  },
}
