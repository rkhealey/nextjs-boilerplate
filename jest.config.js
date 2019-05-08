module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/.next/',
    '<rootDir>/src/styles/',
    '<rootDir>/src/pages/_app.js',
    '<rootDir>/src/pages/_document.js',
    '<rootDir>/src/redux/store.js',
    '<rootDir>/src/redux/reducers/index.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  testURL: 'http://localhost/',
};
