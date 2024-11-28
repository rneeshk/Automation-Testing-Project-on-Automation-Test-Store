/// <reference types = "Cypress" />
import WishList from "../pageObjects/WishList";

describe('Wish List Functionality', () => {
    beforeEach(() => {
        WishList.visit();
        WishList.clickOnLogin();
        
    });
    it('Verify that clicking the "Add to Wishlist" button on the product page successfully adds the selected product to the wishlist and reflects accurately on the wishlist page.', () => {
        
        WishList.loginDetails('borefam3','12345');
        WishList.productPage();
        WishList.wishlistAdd();
        WishList.verify();
    });
    it('Verify that the wishlist page correctly displays all the added products with accurate details', () => {
        WishList.loginDetails('borefam3','12345');
        WishList.verify();
        WishList.displayInfo();
    });
    it('Verify that wishlist button is visible if user in not logged in.', () => {
        cy.get('<a href="https://automationteststore.com/index.php?rt=account/wishlist">').should('not.exist');
    });

    it('Verify that clicking "Remove" on the wishlist page for a product that was removed in another session does not cause a system error and displays an appropriate message.', () => {
        WishList.loginDetails('borefam3','12345');
        WishList.verify();
        cy.get('.wishlist_122').should('not.exist');
        cy.get('.wishlist_123')
          .find('.btn.btn-sm.btn-default.btn-remove')
          .click();
    });

    it('Verify that attempting to add the same product multiple times from the product page does not create duplicate entries in the wishlist and provides a relevant notification.', () => {
        WishList.loginDetails('borefam3','12345');
        WishList.productPage();
        WishList.wishlistAdd();
        WishList.verify();
        cy.get('.wishlist_123').should('have.length', 1);
    });

    it('Verify that the wishlist page behaves correctly when no products are added.', () => {
        WishList.loginDetails('borefam3','12345');
        WishList.isWishListIsEmpty();
        
    });

    it('Verify that the wishlist page supports adding up to the maximum allowed number of items.', () => {
        WishList.loginDetails('borefam3','12345');
        WishList.maxNoOfWishItems();
    });

    it('Verify that the wishlist page functions as expected when only one product is present, allowing it to be removed successfully and transitioning to an empty state.', () => {
        WishList.loginDetails('borefam3','12345');
        WishList.singleItemsPresentDelete();
        cy.get('table').should('not.exist');
    });

});