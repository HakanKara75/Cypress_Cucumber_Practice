// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//cy.clickIfVisible('locate')  bunu da stepdef e ekleriz. tirnak icine locate veririz.

Cypress.Commands.add("verifyTextInElements", (elementLocator, textToVerify, textToVerify2) => {
  const normalizedText = textToVerify.toLowerCase();
  const normalizedText2 = textToVerify2.toLowerCase();

  cy.get(elementLocator)
    .should("be.visible", { timeout: 10000 })
    .each(($element) => {
      cy.wrap($element)
        .invoke("text")
        .then((elementText) => {
          const normalizedElementText = elementText.toLowerCase();
          cy.log(normalizedElementText);
          expect(normalizedElementText).to.satisfy((text) => {
            // İstenen iki metni içeren kontrol
            return text.includes(normalizedText) || text.includes(normalizedText2);
          });
        });
    });
});