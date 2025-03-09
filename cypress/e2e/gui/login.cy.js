describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options) //para o teste único de login, é preciso do cachesession false, para validar o teste rodando novamente. por isso, tem que passar os 3 argumentos de novo

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
