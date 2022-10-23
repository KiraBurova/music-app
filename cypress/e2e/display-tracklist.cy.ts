import {
  ARTISTS,
  DETAILED_ARTIST,
  LOADER,
  SEARCH_ARTISTS_INPUT,
  AUDIO_PLAYER,
} from '../support/constants';

describe('Disaply Tracklist', () => {
  it('Showing tracklist', () => {
    cy.visit('/');
    cy.get(SEARCH_ARTISTS_INPUT).type('The Who');
    cy.get(LOADER).should('be.visible');
    cy.get(ARTISTS).contains('The Who').click();
    cy.get(LOADER).should('not.exist');
    cy.get(DETAILED_ARTIST).contains('The Who');
    cy.get(AUDIO_PLAYER).should('be.visible');
  });
  it('Play the first track', () => {
    cy.visit('/');
    cy.get(SEARCH_ARTISTS_INPUT).type('The Who');
    cy.get(LOADER).should('be.visible');
    cy.get(ARTISTS).contains('The Who').click();
    cy.get(LOADER).should('not.exist');
    cy.get(DETAILED_ARTIST).contains('The Who');
    cy.get(AUDIO_PLAYER).should('be.visible');
    cy.get(AUDIO_PLAYER).first().should('have.prop', 'paused', true);
    cy.get(AUDIO_PLAYER)
      .first()
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .then(($audio) => {
        //@ts-ignore
        $audio[0].play();
      });

    cy.get(AUDIO_PLAYER)
      .should('have.prop', 'paused', false)
      .and('have.prop', 'ended', false);

    cy.wait(1000);

    cy.get(AUDIO_PLAYER)
      .first()
      .should('have.prop', 'paused', false)
      .then(($audio) => {
        //@ts-ignore
        $audio[0].pause();
      });

    cy.get(AUDIO_PLAYER).should('have.prop', 'paused', true);
  });
});
