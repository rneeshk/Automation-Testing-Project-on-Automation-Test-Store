import CheckOutPage from "../pageObjects/CheckOutPage";

describe('Verify Checkout Page Loads Correctly', () => {
    beforeEach(() => {
        CheckOutPage.visit();
        CheckOutPage.clickOnLogin();
    });
    it('Navigate to the checkout page from the cart and verify that all checkout fields (address, payment details) are present and functional.', () => {
        CheckOutPage.loginDetails('borefam3','12345');
        CheckOutPage.clickCartButton();
        CheckOutPage.checkOutClick();
        CheckOutPage.address();
        CheckOutPage.paymentModeCheck();    
    });
    it('Ensure that the confirm order button is accessible.', () => {
        CheckOutPage.loginDetails('borefam3','12345');
        CheckOutPage.clickCartButton();
        CheckOutPage.checkOutClick();
        cy.get('#checkout_btn').should('be.visible').and('be.enabled');
    });
    it('Attempt to access the checkout page when the cart is empty and verify that an appropriate message or error appears.', () => {
        CheckOutPage.loginDetails('borefam3','12345');
        CheckOutPage.clickCartButton(); 
        cy.get('.contentpanel').contains('Your shopping cart is empty!');
    });
    it('Attempt to load the checkout page without login and ensure that the user is redirected to home page or shown an error.', () => {
        CheckOutPage.clickCartButton();
        cy.get('.contentpanel').contains('Continue').click();
        cy.wait(1000);
        cy.url().should('eq','https://automationteststore.com/')
    });
    it('Access the checkout page with a large number of items in the cart and verify that the page loads correctly.', () => {
        CheckOutPage.loginDetails('borefam3','12345');
        CheckOutPage.clickCartButton(); 
        CheckOutPage.checkOutClick();
        cy.url().should('include','checkout/confirm')
    });
    it.only('A registered user proceeds to checkout with the minimum required fields (e.g., only essential information like name, email, shipping address, and payment method).', () => {
        CheckOutPage.loginDetails('borefam3','12345');
        CheckOutPage.clickCartButton();
        CheckOutPage.checkOutClick();
        CheckOutPage.address();
        CheckOutPage.paymentModeCheck();
        cy.get('.confirm_shippment_options > tbody > tr > :nth-child(1)').contains('Bore Fam');
        cy.get('.confirm_shippment_options > tbody > tr > :nth-child(1)').contains('9789789787');
    });
});