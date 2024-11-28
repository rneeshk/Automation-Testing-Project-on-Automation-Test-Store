import CartFunctionalityCartTotal from "../pageObjects/CartFunctionality-cartTotal";

describe('Cart Functionality - Cart Total', () => {
    beforeEach(() => {
        CartFunctionalityCartTotal.visit();
        CartFunctionalityCartTotal.clickOnLogin();
        CartFunctionalityCartTotal.loginDetails('Borefam3','12345');
    });
    it('Add multiple items to the cart and verify that the cart total is calculated correctly.', () => {
        CartFunctionalityCartTotal.cartPage();
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$14.00')
        CartFunctionalityCartTotal.addAnotherProduct('100000');
        // $2,950,014.00
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$2,950,014.00')
    });
    it('Add items with various prices, including discounts or offers, and verify that the total reflects these changes.', () => {
        CartFunctionalityCartTotal.cartPage();
        cy.get(':nth-child(3) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$2,950,016.00')
    });
    it('Modify the cart items directly and verify that the total remains consistent.', () => {
        CartFunctionalityCartTotal.cartPage();
        cy.get(':nth-child(3) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$2,950,016.00')
        cy.get('#cart_quantity50').clear().type('1');
        cy.get('#cart_update').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$43.50')
    });
    it('Remove an item with a high price and verify that the cart total updates accurately.', () => {
        CartFunctionalityCartTotal.cartPage();
        cy.get('#cart_quantity50').clear().type('10');
        cy.get('#cart_update').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$309.00')
        cy.get(':nth-child(3) > :nth-child(7) > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text', '$14.00')
    });
    it.only('Add extremely high-priced items (e.g., luxury products) to the cart and verify that the total calculation can handle large sums.', () => {
        CartFunctionalityCartTotal.highPriceitem('100');

    });
});