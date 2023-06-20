module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  'eslint.workingDirectories': [
    {directory: 'client/', changeProcessCWD: true},
    {directory: 'server/', changeProcessCWD: true},
  ],
};
