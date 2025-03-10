import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.login()
    cy.api_deleteAllProjects()
  })

  it('successfully', () => {
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
    cy.newProjectAPI(project)
    .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
    });
  })
})
