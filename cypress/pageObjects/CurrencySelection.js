class CurrencySelection {
    visit() {
        cy.visit('https://automationteststore.com/index.php?rt=account/login', { failOnStatusCode: false });
        cy.get('#loginFrm_loginname').type('borefam3');
        cy.get('#loginFrm_password').type('12345');
        cy.get('button[title="Login"]').click();
        cy.wait(2000);
        cy.get('.logo').click();
    }

    selectCurrency(currency){
        cy.get('.block_6 > .nav > .dropdown > .dropdown-toggle').click();
        cy.wait(2000);
        cy.contains('.dropdown-menu li', currency).click({force: true});
        cy.wait(2000);
    }
    verifyCurrencySymbol(symbol) {
        cy.get('.block_6 > .nav > .dropdown > .dropdown-toggle').each(($price) => {
            expect($price.text()).to.include(symbol);
        });
    }
    addProductToCart() {
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(2000);
        cy.get('.cart').click();
        cy.wait(2000);
    }
    verifyTotalOrderPrice(symbol) {
        // cy.get('.list-inline > :nth-child(4)').click();
        // cy.wait(2000);
        // cy.get('.product-list').should('contain.text', symbol);
        cy.get(':nth-child(3) > :nth-child(2) > .bold').should('contain.text',symbol + "'260,000,222.50'");
    }

    verifyPreferencesPreservedAfterLogin(currency) {
        cy.get('.nav.float-end>ul>li:nth-child(2)').click();
        cy.wait(2000);
        cy.get(':nth-child(5) > .dropdown-item').click();
        cy.wait(2000);
        cy.get('.nav.float-end>ul>li:nth-child(2)').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.wait(2000);
        cy.get('#input-email').type('test003@gmail.com');
        cy.get('#input-password').type('1234');
        cy.get('button[type="submit"]').click({force: true});
        cy.wait(2000);
        cy.get('#form-currency > .dropdown').should('contain.text', currency);
    }
}

export default new CurrencySelection();
