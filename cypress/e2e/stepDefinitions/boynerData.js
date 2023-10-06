import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Boyner sitesine git', () => {
    cy.visit('https://www.boyner.com.tr')
});

When('arama kutusuna {string} yaz', (searchText)=>{
    cy.get('.header-top_headerTopSearchInput__hZ7mw').type(searchText)
})

Then('sonuca tikla', ()=>{
    cy.get('b').click()
})

And('arama sonucunda iki binden fazla sonuc oldugunu doğrula',()=>{
    cy.get('.product-list_total__TvMCW').invoke('text').then((text) => {
      
        // Text içindeki rakamları alın ve gereksiz karakterleri temizleyin
        const total = parseInt(text.replace(/\D/g, ''));

        // Rakam 2000'den büyük mü diye kontrol ederim
        expect(total).to.be.greaterThan(2000);
        console.log(total);
})
})

