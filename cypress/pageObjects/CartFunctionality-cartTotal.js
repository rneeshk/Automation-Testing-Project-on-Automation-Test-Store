class CartFunctionalCartTotal{
    visit(){
        cy.visit('https://automationteststore.com/');
    }
    clickOnLogin(){
        cy.get('#customer_menu_top > li > a').click();
        cy.wait(1000);
        cy.url().should('include','account/login');
    }

    loginDetails(loginName, password){
        cy.get('#loginFrm_loginname').type(loginName);
        cy.get('#loginFrm_password').type(password);
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.wait(1000);
    }

    cartPage(){
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
        cy.wait(1000);
    }

    productPage(){
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
    }

    addProduct(quantity){
        cy.get('.bgnone').should('be.visible').and('have.text', 'Casual 3/4 Sleeve Baseball T-Shirt');
        cy.get('.productpageprice').should('be.visible').and('have.text', '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t$14.00\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t')
        cy.get('#description').invoke('text').then((txt) => {
            const wordCnt = txt.split(/\s+/).filter(word => word.trim() !== '').length;
            expect(wordCnt).to.be.greaterThan(20);
        });
        cy.get('.easyzoom > .local_image > img').should('be.visible');
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.total-price').should('be.visible').and('have.text','$140.00');
        cy.get('.cart').click();
        cy.wait(1000);
    }
    addAnotherProduct(quantity){
        cy.get('.logo > img').click();
        cy.wait(1000);
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.cart').click();
        cy.wait(1000);
    }
    highPriceitem(quantity){
        cy.get('#topnav > .form-control').select(1);
        cy.get('#sort').select(4)
        cy.get(':nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.cart').click();
        cy.wait(1000);
    }
}

export default new CartFunctionalCartTotal();