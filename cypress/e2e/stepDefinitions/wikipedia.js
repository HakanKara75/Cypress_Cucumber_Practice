import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Given('I open web browser for {string}', (url) => {
    cy.visit(url)
})

When ('I type {string} on the search box And I click on search button', (searchText)=>{
    cy.get('#searchInput').type(searchText);
    cy.get('.pure-button').click()
 })
 
 Then('the URL should be {string}',(urlText)=>{


    cy.url().should('eq', urlText); 
})

And('I want to see an image under title {string} on the right column',()=>{
    cy.get('.infobox-image > .mw-default-size > .mw-file-description > .mw-file-element') .should('be.visible');

})

And('I want to read information about {string} {string} {string} on the right column',(born, died, education)=>{
    cy.get('.biography').should('include.text', born)
    cy.get('.biography').should('include.text', died)
    cy.get('.biography').should('include.text', education)

})

And('I want to read a section about {string}',(year)=>{

    cy.get('#Early_years').should('include', year)
})
