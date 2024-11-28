/// <reference types="Cypress" />
import LoginPage from "../pageObjects/LoginPage";

describe('User Auth - User Login & Authentication', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.clickOnLogin();
    });

    it('Log in with a valid username and password.', () => {
        cy.login('borefam3', '1234');
        LoginPage.verifyLoginSuccess();
    });

    it('Log in, log out, and log in again using the same valid credentials.', () => {
        cy.login('borefam3', '1234');
        LoginPage.verifyLoginSuccess();
        LoginPage.logout();
        LoginPage.clickOnLogin();
        cy.login('borefam3', '1234');
        LoginPage.verifyLoginSuccess();
    });

    it('Enter a valid username and an incorrect password.', () => {
        cy.login('borefam3', '123');
        LoginPage.verifyLoginFailure();
    });

    it('Try logging in with a username/email not registered in the system.', () => {
        cy.login('borefa', '1234');
        LoginPage.verifyLoginFailure();
    });

    it('Leave both the username and password fields empty and click the login button.', () => {
        cy.get(LoginPage.selectors.loginButton).click();
        LoginPage.verifyLoginFailure();
    });

    it('Log in with the correct username and an incorrect password, but vary the case.', () => {
        cy.login('Borefam3', '123');
        LoginPage.verifyLoginFailure();
    });

    it('Password recovery with a case-sensitive email', () => {
        LoginPage.forgotPassword('borefam3', 'Borefam187@edectus.com');
    });

    it('Test login with a password less than minimum length and more than maximum allowed length.', () => {
        cy.login('Borefam3', '123');
        LoginPage.verifyLoginFailure();

        LoginPage.clickOnLogin();
        cy.login('Borefam3', '12345678901234567890');
        LoginPage.verifyLoginFailure();
    });

    it.only('Include leading and trailing whitespaces in the username and password fields.', () => {
        cy.login(' Borefam3 ', ' 1234 ');
        LoginPage.verifyLoginFailure();
    });
});