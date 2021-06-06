// jest.config.ts
// import { Config } from '@jest/types';
// const path = require('path');
// const { defaults } = require('jest-config');
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//     // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
//     // "preset": "jest-puppeteer",
//     globalSetup: path.resolve(process.cwd(),'./setup.js'),
//     globalTeardown: path.resolve(process.cwd(),'./teardown.js'),
//     testEnvironment: path.resolve(process.cwd(),'./puppeteer_environment.js'),
//     // globalTeardown: './teardown.js',
//     // testEnvironment: './puppeteer_environment.js',
//   };
// };

const { defaults } = require('jest-config');
const { Config } = require('@jest/types');
module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
};
