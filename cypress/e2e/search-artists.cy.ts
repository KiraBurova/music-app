import { ARTISTS, LOADER, SEARCH_ARTISTS_INPUT } from './constants';

describe('Search Artists Feature', () => {
  describe('Search Artists', () => {
    it('Successfully loads data on search', () => {
      cy.visit('/');
      cy.get(SEARCH_ARTISTS_INPUT).type('The who');
      cy.get(LOADER).should('be.visible');
      cy.get(ARTISTS).should('have.length', 1);
      cy.get(LOADER).should('not.exist');
    });
  });
});
