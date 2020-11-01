describe('Navigation tests', () => {

  it('Visit Milobella website', () => {
    cy.visit('/');
  })

  it('Login', () => {
    cy.get('#username').type(Cypress.env('MILOBELLA_USERNAME'))
    cy.get('#password').type(Cypress.env('MILOBELLA_PASSWORD'))
    cy.get('button').click()
  })

  it('Make a simple request', () => {
    cy.get('#question').type('bonjour')
    cy.get('button[type="submit"]').click()
  })

  it('Navigate to NLG', () => {

  })
});
