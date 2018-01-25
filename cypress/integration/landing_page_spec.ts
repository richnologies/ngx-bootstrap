import { LandingPo } from '../support/landing.po';

describe('Landing Page test suite', () => {
  const landing = new LandingPo();

  it('Successfully loads and displays all content of the ngx-bootstrap LP', () => {
    landing.navigateTo();

    cy.get('.logo').should('be.visible');
    cy.get('.header-info').should('be.visible');
    cy.get('.content-logo').should('be.visible');
    cy.get('.slogan').should('be.visible');
    cy.get('.descr').should('be.visible');
    cy.get('.version').should('be.visible');
    cy.get('.advantages').should('be.visible');
  });

  it('Get started button redirects to Getting Started page', () => {
    const buttonText = 'Get started';
    const searchedUrl = '/getting-started';

    landing.navigateTo();
    landing.clickByText('.btn', buttonText);

    cy.url().should('include', searchedUrl);
  });

  it('Github button is enabled and contains link to ngx-bootstrap repo', () => {
    const buttonText = 'Github';

    landing.navigateTo();

    cy.get('.btn').contains(buttonText).should('be.enabled');
    cy.get('.btn').contains(buttonText).should('have.attr', 'href', landing.githubUrl);
  });

  it('Info buttons in header are enabled and contains links to slack, github and stackoverflow', () => {
    const buttonSelector = '.header-list li a';

    landing.navigateTo();

    cy.get(buttonSelector).eq(0).should('be.enabled');
    cy.get(buttonSelector).eq(1).should('be.enabled');
    cy.get(buttonSelector).eq(2).should('be.enabled');
    cy.get(buttonSelector).eq(0).should('have.attr', 'href', landing.stackoverflowUrl);
    cy.get(buttonSelector).eq(1).should('have.attr', 'href', landing.githubUrl);
    cy.get(buttonSelector).eq(2).should('have.attr', 'href', landing.slackUrl);
  });

  it('Footer contains links to ng-team, contributors, MIT license, Creative Commons and to original Bootstrap', () => {
    landing.navigateTo();

    cy.get('footer p').eq(0).children('a').eq(0)
      .should('have.attr', 'href', landing.ngTeamUrl);
    cy.get('footer p').eq(0).children('a').eq(1)
      .should('have.attr', 'href', landing.contributorsUrl);
    cy.get('footer p').eq(1).children('a').eq(0)
      .should('have.attr', 'href', landing.mitLicenseUrl);
    cy.get('footer p').eq(1).children('a').eq(1)
      .should('have.attr', 'href', landing.crCommonsUrl);
    cy.get('footer p').eq(2).children('a')
      .should('have.attr', 'href', landing.originalBsUrl);
  });
});
