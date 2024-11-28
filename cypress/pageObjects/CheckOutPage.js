class CheckOutPage{
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
    checkOutClick(){
        cy.get('#cart_checkout1').click();
        cy.wait(1000);
    }
    address(){
        cy.get('.confirm_shippment_options > tbody > tr > :nth-child(2) > address').contains('Saket, New Delhi');
    }
    paymentModeCheck(){
        cy.get('.confirm_payment_options > tbody > tr > :nth-child(3)').contains('Cash On Delivery');
    }
}

export default new CheckOutPage();