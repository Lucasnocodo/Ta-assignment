module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
  },

};

