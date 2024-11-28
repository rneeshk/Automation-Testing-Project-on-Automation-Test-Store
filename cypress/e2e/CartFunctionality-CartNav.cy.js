import CartFunctionalityCartNav from "../pageObjects/CartFunctionality-CartNav";

describe('Card Functionality - Test Cart Page Navigation)', () => {
    beforeEach(() => {
        CartFunctionalityCartNav.visit();
        CartFunctionalityCartNav.clickOnLogin();
        
    });
    it('Click the "Cart" icon/link from any page and verify that it navigates correctly to the cart page.', () => {
        CartFunctionalityCartNav.loginDetails('borefam3','12345');
        CartFunctionalityCartNav.clickCartButton();
    });
    it('Ensure that the cart icon reflects the correct number of items when clicked.', () => {
        CartFunctionalityCartNav.loginDetails('borefam3','12345');
        CartFunctionalityCartNav.cartIcon('0');
    });
    it('Click the "Cart" link when the cart is empty and ensure that the empty cart message is shown correctly.', () => {
        CartFunctionalityCartNav.loginDetails('borefam3','12345');
        CartFunctionalityCartNav.cartIcon('0');
        CartFunctionalityCartNav.emptyCart();
    });
    it('Attempt to navigate to the cart page without any valid session or login and verify ', () => {
        CartFunctionalityCartNav.clickCartButton();
        CartFunctionalityCartNav.addProduct();
    });
    it('Click the "Cart" link during an ongoing checkout process and ensure that the cart page is still accessible and displays the correct items.', () => {
        CartFunctionalityCartNav.loginDetails('borefam3','12345');
        CartFunctionalityCartNav.clickCartButton();
        CartFunctionalityCartNav.addProduct('1');
    });
    it('Navigate to the cart page when the cart is full (with maximum items allowed) and ensure the page load successfully.', () => {
        CartFunctionalityCartNav.loginDetails('borefam3','12345');
        CartFunctionalityCartNav.clickCartButton();
        CartFunctionalityCartNav.addProduct('100000');
    });
    it.only('Verify that the cart navigation works correctly when the cart contains exactly one item.', () => {
        CartFunctionalityCartNav.loginDetails('borefam3','12345');
        CartFunctionalityCartNav.clickCartButton();
    });
});