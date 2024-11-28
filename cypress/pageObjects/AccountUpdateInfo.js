class AccountUpdateInfo{
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

    updateDetails(firstname, lastname, email, phone, fax){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.url().should('include','account/edit');
        cy.get('#AccountFrm_firstname').clear().type(firstname);
        cy.get('#AccountFrm_lastname').clear().type(lastname);
        cy.get('#AccountFrm_email').clear().type(email);
        cy.get('#AccountFrm_telephone').clear().type(phone);
        cy.get('#AccountFrm_fax').clear().type(fax);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    }

    updateEmail(email){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_email').clear().type(email);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    }
    updatePhone(phone){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_telephone').clear().type(phone);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    }
    leaveEmailAndPhone(){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_email').clear();
        cy.get('#AccountFrm_telephone').clear();
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nOops, there is an error with information provided!')
    }
    emailNotValid(email){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_email').clear().type(email);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text',  '\n×\nOops, there is an error with information provided!')
        cy.get('.has-error > .help-block').should('be.visible').and('have.text', 'E-Mail Address does not appear to be valid!')
    }
    nameNotValid(firstname, lastname){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_firstname').clear().type(firstname);
        cy.get('#AccountFrm_lastname').clear().type(lastname);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    }
    updatePassword(currentpass, password, confirmpass){
        cy.get('.nav-dash > :nth-child(2) > a').click();
        cy.wait(1000);
        cy.get('#PasswordFrm_current_password').type(currentpass);
        cy.get('#PasswordFrm_password').type(password);
        cy.get('#PasswordFrm_confirm').type(confirmpass);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your password has been successfully updated.')
    }
    nothingUpdate(){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    }
    updateAlreadyRegEmail(email){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_email').clear().type(email);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nError: E-Mail address is already registered!')
    }
    lengthyField(email, firstname){
        firstname = 'a'.repeat(50);
        email = 'borefam'.repeat(50) + "@edectus.com";

        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_email').clear().type(email);
        cy.get('#AccountFrm_firstname').clear().type(firstname);

        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text',  '\n×\nOops, there is an error with information provided!')
        cy.get(':nth-child(2) > .help-block').should('be.visible').and('have.text','First Name must be between 1 and 32 characters!');
        cy.get(':nth-child(4) > .help-block').should('be.visible').and('have.text', 'E-Mail Address does not appear to be valid!')
    }
    updatePhone(phone){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_telephone').clear().type(phone);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
        // cy.get('.has-error > .help-block').and('be.visible').and('have.text','Telephone must be between 3 and 32 characters!');
        // cy.get('.alert').should('be.visible').and('have.text',  '\n×\nOops, there is an error with information provided!')

    }
    trailingSpaceInput(phone){
        cy.get('.nav-dash > :nth-child(1) > a').click();
        cy.wait(1000);
        cy.get('#AccountFrm_telephone').clear().type(phone);
        cy.get('.col-md-12 > .btn-orange').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible').and('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    }
}
export default new AccountUpdateInfo();