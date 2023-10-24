Given('I open fineuploader page', () => {
    cy.visit("https://fineuploader.com/demos.html")
})

When ('I click to demos link', () => {
    cy.get('.nav-collapse > .nav > :nth-child(2) > a').click()
    })

    Then ('I assert current url and protocol', () => {
       cy.location('pathname').should('eq','/demos.html' ) 
       cy.location('protocol').should('eq','https:')
       cy.location('protocol').should('contain','https')
       cy.location('hostname').should('eq','fineuploader.com')
    })

    When ('I click to Gallery View', () => {
        cy.get('.span2 > .nav > :nth-child(2) > a').click()
        })
        
        When ('I assert that I am on Gallery View', () => {
            cy.url().should('eq','https://fineuploader.com/demos.html#gallery-view')
            })      