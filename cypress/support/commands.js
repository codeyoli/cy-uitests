Cypress.Commands.add('lit', element => {
   cy.get(element).invoke('css', 'border', '2px dashed red')
   cy.wait(800)
})
