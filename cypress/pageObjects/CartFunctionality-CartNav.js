class CartFunctionalityCartNav{
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
    clickCartButton(){
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
        cy.wait(1000);
        cy.url().should('include','checkout/cart')
    }
    cartIcon(num){
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').find('span.label.label-orange.font14').should('have.text', num)
    }
    emptyCart(){
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
        cy.wait(1000);
        cy.get('.contentpanel').contains('Your shopping cart is empty!')
    }
    addProduct(quantity){
        cy.get('.logo > img').click();
        cy.wait(1000);
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
        cy.get('#product_quantity').clear().type(quantity)
        cy.get('.cart').click();
        cy.get('#cart_checkout1').click();
        cy.url().should('include','checkout/confirm');

    }
}

export default new CartFunctionalityCartNav();