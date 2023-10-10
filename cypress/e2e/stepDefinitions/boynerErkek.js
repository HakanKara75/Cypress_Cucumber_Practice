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
})

And ('Click on user icon', () =>{
    cy.get(':nth-child(1) > .header-top_cardIcon__CBiyn > .sc-fqkvVR').click()
})


And ('enter email address', () =>{
    cy.get("input[placeholder='E-posta adresin").type(data.email)
})

And ('enter password', () =>{
    cy.get(':nth-child(2) > :nth-child(1) > .input_inputGrid__UFWmw').type(data.password)
})

And ('Click on Giriş Yap Button', () =>{
    cy.get("button[class='login-button_box__dnyuU login-form_loginSubmitButton__PhqyF").click()
})

And('arama kutusuna ceket yaz', (searchText)=>{
    cy.get('.header-top_headerTopSearchInputText__3artV').click()
    cy.get('.search-suggestion_inputBox__2T6la > input').type("ceket")
    cy.get('.search-suggestion_searchBtn__Oemqg > .sc-fqkvVR').click();
})


When('erkek menusune bas', () =>{

    cy.get(':nth-child(1) > .collapse_root__SrpDo > .collapse_header__LAEcj > .collapse_title__y_n4k').click({force:true});
    cy.get('.checkbox-filter_container__DUb6C > :nth-child(1) > .checkbox_root__86e8X > .d-flex > .checkbox_label__pjGfx').click({force:true});

})


And('onerilen siralama tikla',() => {
    cy.get('.product-list-options_selectedOption__STacx').click({force:true});
    
})

And('onerilen siralamayi fiyat dusukten yuksege yap',() => {
   
    cy.get('.product-list-options_options__xWUw0 > :nth-child(2) > :nth-child(1)').click({force:true});
})

Then('fiyatin dusukten yuksege oldugunu dogrula',() => {
    
    cy.get('div[class="product-price_checkPrice__NMY9e"]').invoke('text').then((text) => {
        cy.log(text);
      });
    cy.get('div[class="product-price_checkPrice__NMY9e"]')
    .then(($elements) => {
        const firstProductPrice = parseFloat($elements.eq(1).text().replace('TL', '').replace(',', '').replace(' ', '')); // İlk ürünün fiyatını alın ve uygun bir veri türüne dönüştürün
        const secondProductPrice = parseFloat($elements.eq(2).text().replace('TL', '').replace(',', '').replace(' ', '')); // İkinci ürünün fiyatını alın ve uygun bir veri türüne dönüştürün
    
        // İkinci ürünün fiyatının birinci üründen büyük olduğunu kontrol edin.
        expect(secondProductPrice).to.be.greaterThan(firstProductPrice);
    });
})
