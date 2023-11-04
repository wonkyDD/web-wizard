/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // roots: [
  //   "<rootDir>"
  // ],
  // modulePaths: [
  //   "<rootDir>"
  // ],
  // moduleDirectories: [
  //   "node_modules",
  //   "src"
  // ],
  rootDir: './',
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
  },
  preset: 'ts-jest',
  setupFiles: ['./test-utils/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test-utils/',
    '<rootDir>/vite.config.ts',
    '<rootDir>/jest.config.js',
  ],
};
