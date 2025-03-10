const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`


Cypress.Commands.add('newProjectAPI', project => {
    cy.request({
        url: '/api/v4/projects/',
        method: 'POST',
        body: {
            name: project.name,
            description: project.description,
            initialize_with_readme: true
        },
        headers: { Authorization: accessToken}
       })
})

Cypress.Commands.add('getProjectAPI', () => {
    cy.request({
        url: '/api/v4/projects/',
        method: 'GET',
        headers: { Authorization: accessToken}
    })
}),


Cypress.Commands.add('api_deleteAllProjects', () => {
    cy.getProjectAPI().then(res =>
      res.body.forEach(project => cy.request({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      }))
    )
  })
  
