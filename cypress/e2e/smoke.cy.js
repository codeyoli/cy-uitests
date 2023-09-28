/// <reference types='cypress'/>
/// <reference types='../support/commands.d.ts'/>
/// <reference types='@reportportal/agent-js-cypress/lib/commands/reportPortalCommands.d.ts'/>

describe('Daily Smoke Test', () => {
   it('Verify user can login', () => {
      cy.info('user is doing loging')
      cy.login(Cypress.env('user'), Cypress.env('pass'))
      cy.screenshot()
   })

})
