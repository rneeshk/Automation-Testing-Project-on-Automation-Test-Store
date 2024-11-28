class CartFunctionalityAddingItem{
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

    navigateProduct(){
        cy.get('.logo > img').click();
        cy.wait(1000);
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        cy.wait(1000);
    }
    addProduct(quantity, totalPrice){
        cy.get('.col-md-12 > .productname').should('be.visible').and('have.text','Skinsheen Bronzer Stick');
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.total-price').should('be.visible').and('have.text',totalPrice);
        cy.get('.cart').click();
        cy.wait(1000);
    }
    addAnotherProduct(){
        cy.go('back');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(4) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.get('.col-md-12 > .productname').should('be.visible').and('have.text','Tropiques Minerale Loose Bronzer');
        cy.get('#product_quantity').clear().type('3');
        cy.get('.total-price').should('be.visible').and('have.text','$115.50');
        cy.get('.cart').click();
        cy.wait(1000);
    }

    insertNegativeQuantity(){
        cy.get('#product_quantity').clear().type('-1');
        cy.get('.cart').click();
        cy.wait(1000);
        cy.get('table').should('not.exist');
    }
    productOutOfCart(){
        cy.get('.logo > img').click();
        cy.wait(1000);
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
        cy.get('.cart').should('not.exist');
    }
}

export default new CartFunctionalityAddingItem();