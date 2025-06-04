module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['unused-imports'],
  rules: {
    'no-unused-vars': 'off', // Disable the default no-unused-vars rule
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
