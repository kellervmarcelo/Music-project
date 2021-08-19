// <reference types="cypress" />
describe('Audio Player', () => {
  it('plays audio', () => {
    cy.visit('/');
    cy.get('.composition-name:first').click();
    cy.get('[data-cy="play"]').click();
    cy.wait(5000);
    cy.get('[data-cy="pause"]').click();
  });
});
