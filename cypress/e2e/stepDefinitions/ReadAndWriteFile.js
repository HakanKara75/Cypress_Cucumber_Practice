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
     // Burada 'text' değişkeni içeriği içerir
    cy.get('.login_credentials_wrap-inner').invoke('text').then((text) => {
       
        // İçeriği bir dosyaya yazmak için cy.writeFile kullanabilirsiniz.
        cy.writeFile("saucedemoNotlari.txt", text);
      });
})

When('type username and password and click the login button', () => {
     
        cy.login(login.username, login.password)

        cy.get('[data-test="error"]').invoke('text').then((text) => {
       
            // İçeriği bir dosyaya yazmak için cy.writeFile kullanabilirsiniz.
            cy.writeFile("saucedemoNotlari.txt", text);
   })
})

Then('assert the page', () => {
    cy.get('[data-test="error"]').should('be.visible')

    //dosyayi okutup icinde bir kelimeyi dogrulamak icin
    cy.readFile("saucedemoNotlari.txt").then((text) => {
        expect(text).to.contain("user")
    });

    cy.readFile("saucedemoNotlari.txt").should('contain', 'password')

})