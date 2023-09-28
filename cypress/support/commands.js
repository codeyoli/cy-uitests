Cypress.Commands.add('login', (user, pass) => {
   cy.visit('/login')
   cy.get('input[placeholder="Email"]').type(user)
   cy.get('input[placeholder="Password"]').type(pass)
   cy.contains('button.btn-primary', 'Sign in').click()
})

Cypress.Commands.add('uploadTestVideo', info => {
   const msg = info.msg
   const path = info.path

   console.log(msg, path)

   cy.task('onvertVideoToBase64', path).then(ret => {
      console.log('*****BASE64-VIDEO****')
      console.log(ret)
      
   })
})
