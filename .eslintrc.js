module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app', // Extends the config shipped with Gatsby.
    'prettier',
  ],
  ignorePatterns: ['node_modules/', '.cache', 'public'],
};
