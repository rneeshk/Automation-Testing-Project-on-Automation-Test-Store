class RegisterPage{
    visit(){
        cy.visit('https://automationteststore.com/');
    }

    clickOnRegister(){
        cy.get('#customer_menu_top > li > a').click();
        cy.wait(1000);
        cy.get('#accountFrm > fieldset > .btn').click();
        cy.wait(1000);
        cy.url().should('include','account/create');
    }

    registerDetails(firstname, lastname, email, phone, fax, company, add1, add2, city, country, zoneid, postcode,loginname, password, confirm){
        cy.get('#AccountFrm_firstname').type(firstname);
        cy.get('#AccountFrm_lastname').type(lastname);
        cy.get('#AccountFrm_email').type(email);
        cy.get('#AccountFrm_telephone').type(phone);
        cy.get('#AccountFrm_fax').type(fax);
        cy.get('#AccountFrm_company').type(company);
        cy.get('#AccountFrm_address_1').type(add1);
        cy.get('#AccountFrm_address_2').type(add2);
        cy.get('#AccountFrm_city').type(city);
        cy.get('#AccountFrm_country_id').select(country).invoke('val').should('eq', country)
        cy.get('#AccountFrm_zone_id').select(zoneid).invoke('val').should('eq', zoneid)
        cy.get('#AccountFrm_postcode').type(postcode);
        cy.get('#AccountFrm_loginname').type(loginname);
        cy.get('#AccountFrm_password').type(password);
        cy.get('#AccountFrm_confirm').type(confirm);
        cy.get('#AccountFrm_agree').check();
        cy.get('button[title="Continue"]').click();
        cy.wait(1000);
    }
}

export default new RegisterPage();