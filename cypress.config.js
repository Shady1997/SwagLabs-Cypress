// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir: 'cypress/reports',       // Directory where the report will be saved
  //   overwrite: false,                   // Do not overwrite previous reports
  //   html: true,                         // Generate an HTML report
  //   json: false,                        // Optionally, also generate a JSON report
  //   timestamp: 'short',                 // Adds a timestamp to the report file name
  // },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/index.html', // Set your base URL
    video: true, // Enable video recording
    supportFile: false,  // Disable support file if not needed
    specPattern: 'cypress/e2e/**/*.js',  // Adjust this to match your test files
    screenshotOnRunFailure: true, // Take screenshot on failure
    defaultCommandTimeout: 10000, // Increase timeout as needed
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);  // Correct way to include the plugin
      // return config;
    },
  },
});
