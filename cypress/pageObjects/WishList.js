class WishList{
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
    productPage(){
        cy.get(':nth-child(1) > .active').click();
        cy.wait(1000);
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.wait(1000);
    }

    wishlistAdd(){
        cy.get('.wishlist_add').click({force: true});
        cy.wait(1000);
    }
    verify(){
        cy.get('#customer_menu_top').trigger('mouseover');
        cy.get('#customer_menu_top>li>ul>li:nth-child(2)').click();
        cy.wait(1000);
        cy.get('.heading1').should('be.visible').and('have.text','\n   My wish list\n  \n')
        cy.get('table>tbody>tr').should('be.visible').and('have.length', 2)
    }

    isWishListIsEmpty(){
        cy.get('#customer_menu_top').trigger('mouseover');
        cy.get('#customer_menu_top>li>ul>li:nth-child(2)').click();
        cy.wait(1000);
        cy.get('.heading1').should('be.visible').and('have.text','\n   My wish list\n  \n')
        // cy.get('.contentpanel').should('be.visible').contains('My wish list is empty!')
        cy.get('table').should('not.exist');
    }
    displayInfo(){
        cy.get('.wishlist_121 > :nth-child(2) > a').should('exist').and('be.visible').and('include.text', 'Designer Men');
        cy.get('.wishlist_121 > :nth-child(4) > .oneprice').should('be.visible').and('have.text', '$32.00');
        cy.get('.wishlist_121 > :nth-child(5)').should('exist').and('be.visible').and('include.text', '11/17/2024');
    }
    maxNoOfWishItems(){
        cy.get('#customer_menu_top').trigger('mouseover');
        cy.get('#customer_menu_top>li>ul>li:nth-child(2)').click();
        cy.wait(1000);
        cy.get('.heading1').should('be.visible').and('have.text','\n\t My wish list\n')
        cy.get('table>tbody>tr').should('be.visible').and('have.length.above', 10)
    }
    singleItemsPresentDelete(){
        cy.get('#customer_menu_top').trigger('mouseover');
        cy.get('#customer_menu_top>li>ul>li:nth-child(2)').click();
        cy.wait(1000);
        cy.get('.heading1').should('be.visible').and('have.text','\n\t My wish list\n')
        cy.get(':nth-child(6) > .btn-default').click();
        cy.wait(1000);
    }
}

export default new WishList();