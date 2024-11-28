import RegisterPage from "../pageObjects/RegisterPage";

describe('User Auth - Account Registration', () => {
    beforeEach(() => {
        RegisterPage.visit();
        RegisterPage.clickOnRegister();
    });
    it('Successful registration with valid details', () => {
        RegisterPage.registerDetails('Bore','Fam','borefam192@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam4', '1234', '1234');
        cy.get('.mb40 > :nth-child(3)').should('be.visible').and('have.text', 'Congratulations! Your new account has been successfully created!')
    });
    it('Password meets strength requirements', () => {
        RegisterPage.registerDetails('Bore','Fam','borefam193@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam5', '123', '123');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text','\n×\nPassword must be between 4 and 20 characters!');
    });
    it('Attempt registration with an already used email address', () => {
        RegisterPage.registerDetails('Bore','Fam','borefam192@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam5', '1234', '1234');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text', '\n×\nError: E-Mail Address is already registered!')
    });
    it('Password mismatch during registration', () => {
        RegisterPage.registerDetails('Bore','Fam','borefam193@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam5', '1234', '1235');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text', '\n×\nPassword confirmation does not match password!')
    });
    it('', () => {
        const longEmail = 't'.repeat(300) + "@gmail.com"; 
        RegisterPage.registerDetails('Bore','Fam', longEmail,'7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam5', '1234', '1234');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text', '\n×\nEmail Address does not appear to be valid!')
    });
    it('Register with a name containing special characters', () => {
        RegisterPage.registerDetails('B!@#e','F@!#m', 'borefam193@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam1@!', '1234', '1234');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text', '\n×\nLogin name must be alphanumeric only and between 5 and 64 characters!')
    });
    it('Register with minimum password length', () => {
        RegisterPage.registerDetails('Bore','Fam', 'borefam193@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam5', '123', '123');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text', '\n×\nPassword must be between 4 and 20 characters!')
    });
    it('Register with a very long first name', () => {
        let longName = 'a'.repeat(100);
        RegisterPage.registerDetails(longName, 'Fam', 'borefam193@edectus.com','7894561230','bore@fax','Demon Slayer','Saket, New Delhi', 'Lado Sarai', 'New Delhi', '99', '1505', '248001', 'borefam5', '1234', '1234');
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('have.text', '\n×\nFirst Name must be between 1 and 32 characters!')
    });
});