class ProductDetails{
    visit(){
        cy.visit('https://automationteststore.com/');
    }
    productPage(){
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
    }
    productDetail(){
        cy.get('.bgnone').should('be.visible').and('have.text', 'Casual 3/4 Sleeve Baseball T-Shirt');
        cy.get('.productpageprice').should('be.visible').and('have.text', '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t$14.00\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t')
        cy.get('#description').invoke('text').then((txt) => {
            const wordCnt = txt.split(/\s+/).filter(word => word.trim() !== '').length;
            expect(wordCnt).to.be.greaterThan(20);
        });
        cy.get('.easyzoom > .local_image > img').should('be.visible');
        cy.get('#product_quantity').clear().type('10');
        cy.get('.total-price').should('be.visible').and('have.text','$140.00');
        cy.get('.cart').click();
        cy.wait(1000);
    }

    addToCart(){
        cy.get('.cart').click();
        cy.wait(1000);
    }

    outOfStockProduct(){
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
        cy.get('.nostock').should('be.visible').and('have.text','Out of Stock')
        cy.get('a[class="cart"]').should('not.exist')
    }
    invalidQuantity(){
        cy.get('.bgnone').should('be.visible').and('have.text', 'Casual 3/4 Sleeve Baseball T-Shirt');
        cy.get('.productpageprice').should('be.visible').and('have.text', '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t$14.00\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t')
        cy.get('#description').invoke('text').then((txt) => {
            const wordCnt = txt.split(/\s+/).filter(word => word.trim() !== '').length;
            expect(wordCnt).to.be.greaterThan(20);
        });
        cy.get('.easyzoom > .local_image > img').should('be.visible');
        cy.get('#product_quantity').clear().type('-3');
        cy.get('.total-price').should('be.visible').and('have.text','$-42.00');
        cy.get('.cart').click();
        cy.wait(1000);
        cy.get('.contentpanel').should('be.visible').and('contain','Your shopping cart is empty!')

    }

    maxQuantityCheck(){
        cy.get('#product_quantity').clear().type('999');
        cy.get('.total-price').should('be.visible').and('have.text','$13,986.00');
    }
}

export default new ProductDetails();