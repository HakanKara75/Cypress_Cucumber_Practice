Given('{string} sitesine gider', (url) => {
    cy.visit(url)
     })
     When('arama kutusuna {string} yazip aratir',(urun) =>  {
       cy.get("input[placeholder='Marka, ürün veya hizmet ara...']").type(urun)
       cy.get(".pl-10 > :nth-child(1) > button[type='button']").click()
       cy.get('.product-filter-sidebar > :nth-child(1) > .text-base').should("be.visible")
    })
    When('sonuclarda {string} veya {string} oldugunu dogrular',(urun, urun2) =>  {
        cy.verifyTextInElements("div[class='line-clamp-2 text-gray-600 h-9 text-xs leading-4.5 mb-1.5']",urun, urun2)
    })
     