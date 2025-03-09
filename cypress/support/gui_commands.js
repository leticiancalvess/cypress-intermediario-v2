
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
      cy.get('.qa-user-avatar').should('be.visible')
    }
  
    login()
  })
Cypress.Commands.add('logout', () => {
    cy.get('.header-user-dropdown-toggle').click();
    cy.get('.sign-out-link').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)

})