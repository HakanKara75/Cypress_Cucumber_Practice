import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
let data;
before(() => {
    //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
    cy.fixture("boynerErkek").then(function (fixtureData) {
        data = fixtureData;
        cy.viewport(1000, 600) //ekran ayarini yapar
    })
})

Given('Go to Boyner', () => {
    cy.visit(data.url)
    cy.get('#onetrust-accept-btn-handler').click({force: true})
});

When('wait on the login button', (searchText)=>{
    cy.get('.header-top_cardIcon__CBiyn .sc-fqkvVR.byzlMQ.icon-account').click()
})