// cypress/e2e/login.spec.js
import 'cypress-mochawesome-reporter/register';

// Import the hooks from the hooks.js file
import '../support/hooks.js';

// cypress/integration/login.spec.js
import LoginPage from '../support/pageObjects/LoginPage';


describe('Cross-browser Login Tests', () => {

  const username = 'standard_user';
  const password = 'secret_sauce';

  it('Login Test in Chrome', { browser: 'chrome' }, () => {
    new LoginPage().fillEmail(username).fillPassword(password).submit();

    // Assert the user is logged in
    cy.get('#shopping_cart_container').should('be.visible');
    //capture screenshot
    cy.screenshot();
  });

  it('Login Test in Firefox', { browser: 'firefox' }, () => {
    new LoginPage().fillEmail(username).fillPassword(password).submit();

    // Assert the user is logged in
    cy.get('#shopping_cart_container').should('be.visible');
  });

  it('Login Test in Edge', { browser: 'edge' }, () => {
    new LoginPage().fillEmail(username).fillPassword(password).submit();

    // Assert the user is logged in
    cy.get('#shopping_cart_container').should('be.visible');
  });
});
