module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/src/app/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/app/.next/',
    '<rootDir>/src/app/styles/',
    '<rootDir>/src/app/pages/_app.js',
    '<rootDir>/src/app/ppages/_document.js',
    '<rootDir>/src/app/redux/store.js',
    '<rootDir>/src/app/redux/reducers/index.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  testURL: 'http://localhost/',
};
