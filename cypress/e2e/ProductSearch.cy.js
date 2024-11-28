/// <reference types = "Cypress" />
import ProductSearch from "../pageObjects/ProductSearch";

describe('Product Search Functionality', () => {

    beforeEach(() => {
        ProductSearch.visit();
    });
    it('Valid Keyword Search( "Makeup")', () => {
        const product = 'makeup';
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product);
        cy.get('.thumbnails.grid.row.list-inline>div').should('be.visible').and('have.length',3);
    });
    it('Search with Partial Keywords: Input: Search for "Shamp" (partial word of "Shampoo").', () => {
        const product = 'shamp';
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product);
        cy.get('.thumbnails.grid.row.list-inline>div').should('be.visible').and('have.length',2);
    });
    it('Search with Special Characters:Input: Search for "@#$%^&*()".', () => {
        const product = '@#$%^&*()';
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product);
        cy.get('.contentpanel > :nth-child(4)').should('be.visible').and('have.text','\n\t\t\tThere is no product that matches the search criteria.\t\t')
    });
    it('Search for Non-Existent Product:Input: Search for "Cooler"', () => {
        const product = 'Cooler';
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product); 
        cy.get('.contentpanel > :nth-child(4)').should('be.visible').and('have.text','\n\t\t\tThere is no product that matches the search criteria.\t\t');
    });
    it('Search with Maximum Input Length:Input: Enter a search string with 256 characters (or the maximum length supported by the search bar).', () => {
        const product = 'a'.repeat(256);
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product); 
        cy.get('.contentpanel > :nth-child(4)').should('be.visible').and('have.text','\n\t\t\tThere is no product that matches the search criteria.\t\t');
    });
    it('Empty Search Query. Click the search button without entering something', () => {
        cy.get('.button-in-search > .fa').click();
        cy.wait(1000);
        cy.get('.contentpanel > :nth-child(4)').should('be.visible').and('have.text','\n\t\t\tThere is no product that matches the search criteria.\t\t');
    });
    it('Minimum Length Search Query. (e.g., Search with a single character like "A.")', () => {
        const product = 'A';
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product);
        cy.get('.thumbnails.grid.row.list-inline>div').should('be.visible').and('have.length',24);
    });
    it('Search with White Spaces Only:Input: Search with spaces (e.g., " ").', () => {
        const product = ' ';
        ProductSearch.searchProduct(product);
        cy.get('#keyword').should('be.visible').and('have.value', product);
        cy.get('.contentpanel > :nth-child(4)').should('be.visible').and('have.text','\n\t\t\tThere is no product that matches the search criteria.\t\t');
    });
});