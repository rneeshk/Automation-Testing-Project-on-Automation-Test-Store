class guestCheckout{
    visit(){
        cy.visit('https://automationteststore.com/');
    }

    productPage(){
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
    }

    addProduct(quantity){
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.cart').click();
        cy.wait(1000);
    }
    checkOutClick(){
        cy.get('#cart_checkout1').click();
        cy.wait(1000);
    }
    guestSelect(){
        cy.get('#accountFrm_accountguest').check();
        cy.get('#accountFrm > fieldset > .btn').click();
        cy.wait(1000);
    }
    guestForm(firstname, lastname, email, telephone, fax, company, add1, add2, city,country, zoneid, postcode){
        cy.get('#guestFrm_firstname').type(firstname);
        cy.get('#guestFrm_lastname').type(lastname);
        cy.get('#guestFrm_email').type(email);
        cy.get('#guestFrm_telephone').type(telephone);
        cy.get('#guestFrm_fax').type(fax);
        cy.get('#guestFrm_company').type(company);
        cy.get('#guestFrm_address_1').type(add1);
        cy.get('#guestFrm_address_2').type(add2);
        cy.get('#guestFrm_city').type(city);
        cy.get('#guestFrm_country_id').select(country).invoke('val').should('eq', country)
        cy.get('#guestFrm_zone_id').select(zoneid).invoke('val').should('eq', zoneid)
        cy.get('#guestFrm_postcode').type(postcode);
        cy.get('button[title="Continue"]').click();
        cy.wait(1000);
    }
}
export default new guestCheckout();