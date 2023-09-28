/// <reference types='cypress'/>

declare namespace Cypress {
   interface Chainable<Subject> {
      /**
       * Logs in the user with given username and password credentials
       * @param user username string
       * @param pass password string
       */
      login(user: string, pass: string): Chainable<Subject>
   }
}
