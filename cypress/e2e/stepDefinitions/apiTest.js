Given('go to pokeapi', () => {
    cy.visit("https://pokeapi.co/")
    
})

Then('send the request assert response', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/2')
    .its("headers")
    .its("content-type")
    .should("include", "application/json; charset=utf-8")
})

Then('send the request assert response 2.format', () => {
    cy.request({
        url:'https://pokeapi.co/api/v2/pokemon/1',
        method: 'GET'
    })
    .then((response) => {
        expect(response.headers).to.have.property('content-type').and.include("application/json; charset=utf-8")
    })
   
})