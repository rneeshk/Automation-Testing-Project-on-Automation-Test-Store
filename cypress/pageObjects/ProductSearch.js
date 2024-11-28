class ProductSearch{

    visit(){
        cy.visit('https://automationteststore.com/');
    }

    searchProduct(productName){
        cy.get('#filter_keyword').clear().type(productName);
        cy.get('.button-in-search > .fa').click();
        cy.wait(1000);
    }
}

export default new ProductSearch();