import CartFunctionalityRemoveItems from "../pageObjects/CartFunctionality-removeItems";

describe('Cart Functionality - Remove Items', () => {
    beforeEach(() => {
        CartFunctionalityRemoveItems.visit();
        CartFunctionalityRemoveItems.clickOnLogin();
        CartFunctionalityRemoveItems.loginDetails('Borefam3','12345');
    });
    it('Remove a single item from the cart and verify that the item is removed from the cart.', () => {
        CartFunctionalityRemoveItems.navigateToCart();
        CartFunctionalityRemoveItems.removeSingleProduct();
    });
    it('Remove multiple items and verify that the cart updates accordingly.', () => {
        CartFunctionalityRemoveItems.navigateToCart();
        CartFunctionalityRemoveItems.removeMultipleProduct();
    });

    it('Attempt to remove an item that was already removed in a previous session or does not exist.', () => {
        CartFunctionalityRemoveItems.navigateToCart();
        cy.get('table').should('not.exist');
    });
    it('Remove the last item from the cart and verify that the cart becomes empty and shows an appropriate message.', () => {
        CartFunctionalityRemoveItems.navigateToCart();
        cy.get('.container-fluid.cart-info.product-list>table>tbody>tr:last-child>td:last-child>a').click();
        cy.wait(1000);
    });
    
    it('Remove the first item in a cart containing multiple products and ensure the cart updates correctly.', () => {
        CartFunctionalityRemoveItems.navigateToCart();
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text','$118.50');
        cy.get('.container-fluid.cart-info.product-list>table>tbody>tr:nth-child(2)>td:last-child>a').click();
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text','$29.50');
    });

    it.only('Attempt to remove an item from a cart with a maximum number of items.', () => {
        CartFunctionalityRemoveItems.navigateToCart();
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text','$2,950,043.50');
        cy.get('.container-fluid.cart-info.product-list>table>tbody>tr:nth-child(2)>td:last-child>a').click();
        cy.get(':nth-child(1) > :nth-child(2) > .bold').should('be.visible').and('have.text','$14.00');
    });
});