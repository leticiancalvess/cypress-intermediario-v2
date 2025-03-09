describe('logout', () => {
    it('successfully', () => {
        cy.login();
        cy.logout();
    })
})