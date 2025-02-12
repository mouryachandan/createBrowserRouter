module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  };
  