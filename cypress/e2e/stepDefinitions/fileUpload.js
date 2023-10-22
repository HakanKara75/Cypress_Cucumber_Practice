

const pathName= 'junit.png'
Given('I open fineuploader page', () => {
    cy.visit("https://fineuploader.com/demos.html")
})

When ('I click to upload button and a file upload', () => {
    const fixturePath = 'fixtures/junit.png';
  

    cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').attachFile(pathName, { fileContent: fixturePath });

    })

    Then ('I assert upload the file', () => {
        cy.get('.qq-upload-file-selector').should('contain', pathName);
        
        
        })

