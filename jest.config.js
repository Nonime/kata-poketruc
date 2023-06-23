module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.idea/',
    '<rootDir>/.vscode/',
    '<rootDir>/container/',
    '<rootDir>/coverage/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
    '<rootDir>/hooks/',
    '<rootDir>/ic/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/app/*.(js|scss)'
  ],
  testMatch: [
    '<rootDir>/src/app/*.spec.ts',
    '<rootDir>/src/app/**/*.spec.ts'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcovonly', 'text-summary', 'text'],
  coverageDirectory: 'coverage',
};
