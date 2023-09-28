/// <reference types='cypress'/>
/// <reference types='../support/commands.d.ts'/>

describe('Daily Smoke Test', () => {
   it('TC3 verify user can see the home page', () => {
      cy.visit('/')
      cy.wait(1000)
      cy.get('h1').as('banner')
      cy.lit('@banner')
      cy.get('@banner').should(
         'have.text',
         'Trello brings all your tasks, teammates, and tools together',
      )
   })

   it('TC4 verify user can see the login page', () => {
      cy.visit('/login')
      cy.get('h1').as('banner')
      cy.get('@banner').should('be.visible')
      cy.lit('@banner')
      cy.get('@banner').should('have.text', 'Log in to Trello')
   })
})
