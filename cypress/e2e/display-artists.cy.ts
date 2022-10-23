import {
  ARTISTS,
  DETAILED_ARTIST,
  LOADER,
  SEARCH_ARTISTS_INPUT,
} from '../support/constants';

describe('Display Artists Feature', () => {
  it('Opens another page on click on a card', () => {
    cy.visit('/');
    cy.get(SEARCH_ARTISTS_INPUT).type('The Who');
    cy.get(LOADER).should('be.visible');
    cy.get(ARTISTS).contains('The Who').click();
    cy.get(LOADER).should('not.exist');
    cy.get(DETAILED_ARTIST).contains('The Who');
  });
});
