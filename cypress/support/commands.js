import 'cypress-localstorage-commands'

Cypress.Commands.add('assertLoadingIsShownAndHidden', () => {
  cy.contains('Loading ...').should('be.visible')
  cy.contains('Loading ...').should('not.exist')
})


Cypress.Commands.add('searchQuery', (query, page = 0) => {
      //cy.intercept('GET',
      //  '**/search?query=React&page=0'
      //).as('getStories')

    cy.intercept({
      method: 'GET',
      pathname: '**/search',
      query: {
        query: `${query}`,
        page: `${page}`
      }
    })
})