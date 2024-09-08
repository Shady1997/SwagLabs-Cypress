// cypress/support/pageObjects/LoginPage.js

class LoginPage {

    fillEmail(value){
        const field = cy.get('#user-name')
        field.clear();
        field.type(value);
        return this
    }

    fillPassword(value){
        const field = cy.get('#password')
        field.clear();
        field.type(value);
        return this
    }

    submit(){
        const button = cy.get('#login-button');
        button.click()
    }
}

export default LoginPage;