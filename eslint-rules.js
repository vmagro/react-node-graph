module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  esnext: true,
  ecmaFeatures: {
    modules: true,
  },
  rules: {
    'eqeqeq': 'error',
    'curly': ['error', 'all'],
    'guard-for-in': 'error',
    'no-eval': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-cond-assign': ['error', 'always'],
  },
};
