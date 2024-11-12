import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  clearMocks: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

export default createJestConfig(config);