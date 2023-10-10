import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


    let data;
    before(() => {
        //fixture klasorundan boynerData dosyasinda olusturulan datalari okumak icin
        cy.fixture("boynerErkek").then(function (fixtureData) {
            data = fixtureData;
           
        })
    })


Given('Go to Boyner', () => {
    cy.visit(data.url)
});

And ('Click on user icon', () =>{
    cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR').click()
})


And ('enter email address', () =>{
    cy.get("input[placeholder='E-posta adresin") .should('be.visible', { timeout: 50000 }, {force: true});
    cy.get("input[placeholder='E-posta adresin").type(data.email)
})

And ('enter password', () =>{
    cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw') .should('be.visible', { timeout: 50000 }, {force: true});
    cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw').type(data.password)
})

And ('Click on Giriş Yap Button', () =>{
    cy.get("button[class='login-button_box__dnyuU login-form_loginSubmitButton__PhqyF").click()
})

When('erkek menusune tikla',() => {

    cy.get(':nth-child(2) > .mega-menu_gift__ccvMi') .trigger('mouseover')
    
});


And('sneakers sec',() => {
    cy.get('a[href="/erkek-spor-ayakkabi-modelleri-c-200402"] h3:contains("Sneakers")').should('be.visible', { timeout: 50000 });
    cy.wait(3000, {force:true})
    cy.get('a[href="/erkek-spor-ayakkabi-modelleri-c-200402"] h3:contains("Sneakers")').click({force:true});
   
})


And('marka nike sec',() => {
    /* cy.get(':nth-child(2) > .collapse_root__SrpDo > .collapse_header__LAEcj').should('be.visible', { timeout: 50000 });
    */
    cy.wait(3000, {force:true})
    cy.get(':nth-child(2) > .collapse_root__SrpDo > .collapse_header__LAEcj').click({force:true});
    cy.get(':nth-child(5) > .checkbox_root__86e8X > :nth-child(1) > .checkbox_box__1NS2V').click({force:true});
   
})


Then('urunlerde nike oldugunu dogrula', () => {
   /* cy.get('div[class="product-item_brand__LFImW"]').should('be.visible', { timeout: 50000 }); 
   */
   cy.wait(5000, {force:true})
    cy.get('div[class="product-item_brand__LFImW"]').then(($elements) => {
        
      const firstProductMarkText = $elements.eq(1).text(); // İlk ürünün fiyatını metin olarak alın
      const secondProductMarkText = $elements.eq(2).text(); // İkinci ürünün fiyatını metin olarak alın
  
      // Fiyat metinlerinde "Nike" kelimesini kontrol edin
      expect(firstProductMarkText).to.include('Nike');
      expect(secondProductMarkText).to.include('Nike');
    });
  });


