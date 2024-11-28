/// <reference types = "Cypress" />
import AccountUpdateInfo from "../pageObjects/AccountUpdateInfo";

describe('Account Update Information', () => {
    beforeEach(() => {
        AccountUpdateInfo.visit();
        AccountUpdateInfo.clickOnLogin();
        AccountUpdateInfo.loginDetails('borefam3', '12345')
    });
    it('Update all fields (firstname, laststname, phone, fax) with valid inputs.', () => {
        AccountUpdateInfo.updateDetails('Rajneesh','Kumar','borefam191@edectus.com','7894561230','faxi@fax');
    });
    it('Change the email address to a valid format like "user@example.com"', () => {
        AccountUpdateInfo.updateEmail('borefam191@edectus.com');
    });
    it('Update only a subset of fields (e.g., change the phone number and email but leave the rest unchanged).', () => {
        AccountUpdateInfo.updateEmail('borefam191@edectus.com');
        AccountUpdateInfo.updatePhone('1478523690');
    });
    it('Leave mandatory fields (e.g., email or phone number) blank and attempt to save.', () => {
        AccountUpdateInfo.leaveEmailAndPhone();
    });
    it('Enter an email address without proper format (e.g., userexample.com or user@.com)', () => {
        AccountUpdateInfo.emailNotValid('borefam191edectus.com');
    });
    it('Enter unsupported special characters in the name field (e.g., @#$%^)', () => {
        AccountUpdateInfo.nameNotValid('R@jneesh!','Kum@r');
    });
    it('Update the password with mismatched "New Password" and "Confirm Password" fields.', () => {
        AccountUpdateInfo.updatePassword('12345','12345','12345');
    });
    it('Attempt to update fields without making any changes.', () => {
        AccountUpdateInfo.nothingUpdate();
    });
    it('Attempt to update the email address to one already registered with another account.', () => {
        AccountUpdateInfo.updateAlreadyRegEmail('borefam187@edectus.com')
    });
    it('Enter the maximum allowed characters in fields like name, and email address', () => {
        AccountUpdateInfo.lengthyField();
    });
    it('Update phone number with exactly 10 digits', () => {
        AccountUpdateInfo.updatePhone('9789789787');
    });
    it('Include leading/trailing spaces in inputs (e.g., abc abc ).', () => {      // bug
        AccountUpdateInfo.trailingSpaceInput('    9789789787   ');
    });
});