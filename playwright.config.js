// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  fullyParallel: true,
  testDir: './tests', // what test to run
  timeout: 60000, // general timeout
  expect: { //timeout only for assertions
    timeout: 60000,
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    screenshot: 'on',
  },

});
module.exports = config //exports across the project
