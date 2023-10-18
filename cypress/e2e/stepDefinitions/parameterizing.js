import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";
import {parameterizing} from "../../pages/parameterizing";
import { boynerMan } from "../../pages/boynerMan";

let data;
before(() => {
    //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
    cy.fixture("boynerErkek").then(function (fixtureData) {
        data = fixtureData;
       
    })
})

Given('I open login page', () => {
   parameterizing.visit()
    })

    Given('I click to login button', () => {
        parameterizing.clickLoginButton()
        })
    When('I fill username with {string}', username => {
        
        parameterizing.sendKeyEmail(username)
        })
        And('I fill password with {string}', password => {
        
            parameterizing.sendKeyPassword(password)
            })

            And('I click on submit login', () => {
                parameterizing.clickSubmitLogin()
                })

                Then('I click on submit login', () => {
                    cy.get('.mobile__remember').should('be.visible')
                    })