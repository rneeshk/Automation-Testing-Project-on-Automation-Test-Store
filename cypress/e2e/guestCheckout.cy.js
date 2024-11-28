import guestCheckOut from "../pageObjects/guestCheckOut";

describe('Guest Checkout Form Validation', () => {
    beforeEach(() => {
        guestCheckOut.visit();
    });
    it('Fill out all required fields with valid details and submit the form to verify that the order is processed.', () => {
        guestCheckOut.productPage();
        guestCheckOut.addProduct('5');
        guestCheckOut.checkOutClick();
        guestCheckOut.guestSelect();    
        guestCheckOut.guestForm('Guest1','User','abc@gmail.com','123456','fax','Home','Seohara','Bijnor','Seohara','99','1505','123456');
    });
    it('Leave one or more fields empty and ensure that the form shows appropriate error messages for missing required fields.', () => {
        guestCheckOut.productPage();
        guestCheckOut.addProduct('5');
        guestCheckOut.checkOutClick();
        guestCheckOut.guestSelect(); 
        guestCheckOut.guestForm(' ','User','abc@gmail.com','123456','fax','Home','Seohara','Bijnor','Seohara','99','1505','123456'); 
        cy.get('.has-error > .help-block').contains('greater than 3 and less than 32')
    });
    it('Submit the form with invalid data (e.g., incorrect format for email or payment details) and verify that the error messages are shown.', () => {
        guestCheckOut.productPage();
        guestCheckOut.addProduct('5');
        guestCheckOut.checkOutClick();
        guestCheckOut.guestSelect(); 
        guestCheckOut.guestForm('Guest1','User','abcgmail.com','123456','fax','Home','Seohara','Bijnor','Seohara','99','1505','123456');
        // E-Mail Address does not appear to be valid!
        cy.get('.has-error > .help-block').contains('E-Mail Address does not appear to be valid!')
    });
    it('Test the form with long input values (e.g., long addresses or names) to ensure the form can handle large text fields.', () => {
        guestCheckOut.productPage();
        guestCheckOut.addProduct('5');
        guestCheckOut.checkOutClick();
        guestCheckOut.guestSelect(); 
        guestCheckOut.guestForm('Guest1'.repeat(50),'User','abc@gmail.com','123456','fax','Home','Seohara','Bijnor','Seohara','99','1505','123456');
        cy.get('.has-error > .help-block').contains('greater than 3 and less than 32')
    });
    it('Test form validation with edge case data, such as entering special characters or spaces in fields like name and address.', () => {
        guestCheckOut.productPage();
        guestCheckOut.addProduct('5');
        guestCheckOut.checkOutClick();
        guestCheckOut.guestSelect(); 
        guestCheckOut.guestForm('!Guest1@@@!','User','abc@gmail.com','123456','fax','Home','Seohara','Bijnor','Seohara','99','1505','123456');
    });
    it.only('Enter the minimum required characters in each input field and verify that the form submits correctly or not.', () => {
        guestCheckOut.productPage();
        guestCheckOut.addProduct('5');
        guestCheckOut.checkOutClick();
        guestCheckOut.guestSelect(); 
        guestCheckOut.guestForm('G','User','abc@gmail.com','123456','fax','Home','Seohara','Bijnor','Seohara','99','1505','123456');
        cy.get('.has-error > .help-block').contains('greater than 3 and less than 32')
    });
});
