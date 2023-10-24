import { example } from "../../fixtures/example";

    let login;
    before(() => {
        //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
        cy.fixture("example").then(function (fixtureData) {
            login = fixtureData;
           
        })
    })
Given('visit the saucedemo', () => {
    cy.visit("https://saucedemo.com")
})

When('type username and password and click the login button', () => {
     
        cy.login(login.username, login.password)
   })


Then('assert the page', () => {
    cy.get('[data-test="error"]').should('be.visible')
})