// cypress/support/hooks.js

// Define URL and other reusable variables
const baseUrl = 'https://www.saucedemo.com/v1/index.html';

// This will run before all tests
before(() => {
  cy.visit(baseUrl);
});

// This will run after all tests
after(() => {
  // Optionally perform any cleanup if needed
});

// This will run before each test
beforeEach(() => {
  //Cypress.config('video', true); // Enable video recording for each test
});

// This will run after each test
afterEach(() => {
  //cy.screenshot(); // Take a screenshot after each test
});
