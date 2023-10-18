class Parameterizing{



    visit(){
        cy.visit("https://www.pazarama.com/");
    }
    clickLoginButton(){
        cy.get('.pl-7 > .btn').click()
    }
sendKeyEmail(key){
    cy.get('#Username').type(key)
}

sendKeyPassword(key){
    cy.get('#Password').type(key)
}
clickSubmitLogin(){
    cy.get('#submit-button').click()
}

seeHomepage(){
    
}
}
export const parameterizing= new Parameterizing();
