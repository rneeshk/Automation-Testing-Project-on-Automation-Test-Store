class CartFunctionalityRemoveItems{
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
    navigateToCart(){
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
        cy.wait(1000);
    }
    removeSingleProduct(){
        cy.get('.container-fluid.cart-info.product-list>table>tbody>tr:last-child>td:nth-child(7)>a').click();
        cy.wait(1000);
    }
    removeMultipleProduct(){
        cy.get('.container-fluid.cart-info.product-list>table>tbody>tr>td:last-child>a')
            .should('be.visible')
            .click({ multiple: true });

        cy.wait(1000);
    }
}

export default new CartFunctionalityRemoveItems();