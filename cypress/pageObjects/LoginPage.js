class LoginPage {
    constructor() {
        this.url = 'https://automationteststore.com/';
        this.selectors = {
            loginLink: '#customer_menu_top > li > a',
            loginName: '#loginFrm_loginname',
            password: '#loginFrm_password',
            loginButton: '#loginFrm > fieldset > .btn',
            forgotPasswordLink: '[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]',
            forgottenLoginName: '#forgottenFrm_loginname',
            forgottenEmail: '#forgottenFrm_email',
            forgotPasswordButton: '.col-md-12 > .btn-orange',
            alert: '.alert',
            mainText: '.maintext',
            logoutLink: '.nav-dash > :nth-child(9) > a',
            logoutConfirmation: '.mb40 > :nth-child(3)'
        };
    }

    visit() {
        cy.visit(this.url);
    }

    clickOnLogin() {
        cy.get(this.selectors.loginLink).click();
        cy.url().should('include', 'account/login');
    }

    login(loginName, password) {
        cy.get(this.selectors.loginName).type(loginName);
        cy.get(this.selectors.password).type(password);
        cy.get(this.selectors.loginButton).click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', 'account/account');
        cy.get(this.selectors.mainText).should('be.visible').and('have.text', ' My Account');
    }

    verifyLoginFailure() {
        cy.url().should('include', 'account/login');
        cy.get(this.selectors.alert).should('be.visible').and('have.text', '\n×\nError: Incorrect login or password provided.');
    }

    forgotPassword(loginName, loginEmail) {
        cy.get(this.selectors.forgotPasswordLink).click();
        cy.get(this.selectors.forgottenLoginName).type(loginName);
        cy.get(this.selectors.forgottenEmail).type(loginEmail);
        cy.get(this.selectors.forgotPasswordButton).click();
        cy.get(this.selectors.alert)
            .should('be.visible')
            .and('have.text', '\n×\nError: No records found matching information your provided, please check your information and try again!');
    }

    logout() {
        cy.get(this.selectors.logoutLink).click();
        cy.get(this.selectors.logoutConfirmation)
            .should('be.visible')
            .and('have.text', 'You have been logged off your account. It is now safe to leave the computer.');
    }
}

export default new LoginPage();