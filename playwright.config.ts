/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Folder where test files are present
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: false,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  //retries
    //retries: 3,
    
  // Workers configuration
  workers: process.env.CI ? 1 : undefined,
 //workers:5,

  // HTML report
  reporter: 'html',
  //reporter:[['html',{open:"on-failure"}]],

  //reporter: 'allure-playwright',
//   reporter: [['html', { open: 'never', outputFolder: 'html-report' }],
// // ['list'],
// // ['line'],
// // ['dot'],
// //['junit',{outputFile:'junit.xml'}],
// ['json',{outputFile:'junit.json'}],
// ['allure-playwright]
// ],

  //retries
  //retries: 3,

  //tags
  //grep:/'@sanity'/,
  //grep:/'@regression'/,
  // grep:/'@sanity'|'@regression'/,
  //grep:/'(?=.*@sanity) (?=.*@regression)'/,

  // Common settings
  use: {

    // Open browser in headed mode
    headless: false,

    //screenshot on failure
    //screenshot: 'only-on-failure',

    //video recording on failure
    //video: 'on'

    // tracing on failure
    //trace: 'retain-on-failure'

  },


  // Run only Chrome browser
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

});