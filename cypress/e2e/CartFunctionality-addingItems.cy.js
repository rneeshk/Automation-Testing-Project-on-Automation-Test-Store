import CartFunctionalityAddingItems from "../pageObjects/CartFunctionality-addingItems";

describe('Cart Functionality - Adding Items', () => {
    beforeEach(() => {
        CartFunctionalityAddingItems.visit();
        CartFunctionalityAddingItems.clickOnLogin();
        CartFunctionalityAddingItems.loginDetails('Borefam3', '12345');
    });
    it('Add a single item to the cart and verify that it appears to have the correct details (name, quantity, price).', () => {
        CartFunctionalityAddingItems.navigateProduct();
        CartFunctionalityAddingItems.addProduct('3');
    });

    it('Add multiple items to the cart and verify that each item is correctly listed with its details.', () => {
        CartFunctionalityAddingItems.navigateProduct();
        CartFunctionalityAddingItems.addProduct('3');
        cy.go('back');
        CartFunctionalityAddingItems.addAnotherProduct();
    });

    it('Try adding an item with an invalid quantity (e.g., 0 or negative) and verify that an error message appears.', () => {
        CartFunctionalityAddingItems.navigateProduct();
        CartFunctionalityAddingItems.insertNegativeQuantity();
    });

    it('Try adding an item that is out of stock and verify that it cannot be added to the cart.', () => {
        CartFunctionalityAddingItems.productOutOfCart();
    });

    it('Add a large number of items (e.g., maximum allowed quantity) to the cart and ensure the cart can handle the load.', () => {
        CartFunctionalityAddingItems.navigateProduct();
        CartFunctionalityAddingItems.addProduct('100000', '$2,950.00');
    });
    it('Add the first item to an empty cart and verify that the cart is not empty after the addition.', () => {
        CartFunctionalityAddingItems.navigateProduct();
        CartFunctionalityAddingItems.addProduct('1', '$29.50');
    });
    it.only('Add the maximum number of allowed items to the cart and check if the cart functionality breaks or shows unexpected behavior.', () => {
        CartFunctionalityAddingItems.navigateProduct();
        CartFunctionalityAddingItems.addProduct('10', '$295.00');
    });
});