/// <reference types = "Cypress" />

import ProductDetails from "../pageObjects/ProductDetails";

describe('Product Detail Page', () => {
    beforeEach(() => {
        ProductDetails.visit();
    });
    it('Click on a product thumbnail or link from the product listing page.', () => {
        ProductDetails.productPage();
    });
    it('On the product detail page, verify the product name, description, price, and images.', () => {
        ProductDetails.productPage();
        ProductDetails.productDetail();
    });

    it('Add to Cart" Functionality (e.g., Enter a valid quantity and click "Add to Cart.")', () => {
        ProductDetails.productPage();
        ProductDetails.productDetail();
        ProductDetails.addToCart();
    });

    it('Click on a product that no longer exists (e.g., a deleted or out-of-stock item).', () => {
        ProductDetails.outOfStockProduct();
    });

    it('Click on the "Add to Cart" button for a product marked as "Out of Stock".', () => {
        ProductDetails.outOfStockProduct();
    });

    it('Invalid Quantity Input. (e.g., Enter a negative quantity "-1" or a non-numeric value "abc" in the quantity field.', () => {
        ProductDetails.productPage();
        ProductDetails.invalidQuantity();
    });

    it('Attempt to add the maximum quantity of a product to the cart (e.g., 999 units).', () => {
        ProductDetails.productPage();
        ProductDetails.maxQuantityCheck();
        ProductDetails.addToCart();
    });
    it('Add a product to the cart with a quantity of 1.', () => {
        ProductDetails.productPage();
        ProductDetails.productDetail();
        ProductDetails.addToCart();
    });
    it.only('Maximum Available Stock (e.g., Enter the exact number of items available in stock in the quantity field.)', () => {
        ProductDetails.productPage();
        ProductDetails.productDetail();
        ProductDetails.addToCart();
    });
});