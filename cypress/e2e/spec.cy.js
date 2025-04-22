describe('THEGRANDMARIOT Website Test', () => {

  beforeEach(() => {
    cy.visit('http://studentweb.cencol.ca/srimal5/index.html');
    cy.wait(2000); // Wait for dynamic content to load
  });

  it('Visits the Homepage', () => {
    cy.get('nav', { timeout: 10000 }).should('be.visible');
  });

  it('Navigates through navbar links', () => {
    cy.get('nav', { timeout: 10000 }).should('be.visible');
    
    cy.contains('HOME', { timeout: 10000 }).click();
    cy.url().should('include', 'index.html');

    cy.contains('ABOUT', { timeout: 10000 }).click();
    cy.url().should('include', 'about.html');

    cy.contains('MENU/LIST', { timeout: 10000 }).click();
    cy.url().should('include', 'menulist.html');

    cy.contains('SITEMAP', { timeout: 10000 }).click();
    cy.url().should('include', 'sitemap.html');

    cy.contains('CONTACT', { timeout: 10000 }).click();
    cy.url().should('include', 'contact.html');

    cy.contains('LOCATION', { timeout: 10000 }).click();
    cy.url().should('include', 'location.html');
  });

  // it('Clicks Login button', () => {
  //   cy.contains('Login', { timeout: 10000 }).should('be.visible').click();
  //   cy.url().should('include', 'authenticationendpoint/login.do');
  // });


  it('Clicks Login button and checks redirection', () => {
  cy.contains('Login', { timeout: 10000 }).should('be.visible').click();

  cy.origin('https://mysso.centennialcollege.ca', () => {
    cy.url().should('include', 'authenticationendpoint/login.do');
    cy.get('form').should('exist'); // Optional: check if the login form exists
  });
});


  // it('Checks if leaflet Map is present on LOCATION page', () => {
  //   cy.contains('LOCATION', { timeout: 10000 }).click();
  //   cy.get('iframe[src*="maps.geoapify.com"]', { timeout: 10000 }).should('exist');
  // });

  it('Checks if leaflet Map is present on LOCATION page', () => {
  cy.contains('LOCATION', { timeout: 10000 }).click();
  cy.get('#map', { timeout: 10000 }).should('be.visible'); // ✅ this checks the map div is there
  cy.get('img.leaflet-tile', { timeout: 10000 }).should('have.attr', 'src').and('include', 'geoapify'); // ✅ this checks map tiles load
});


  // afterEach(function () {
  //   // Take screenshot only if a test failed
  //   if (this.currentTest.state === 'failed') {
  //     cy.screenshot();
  //   }
  // });

//   afterEach(function () {
//   if (this.currentTest?.state === 'failed') {
//     cy.screenshot();
//   }
// });


// afterEach(function () {
//   // Use try-catch to prevent Cypress from blowing up
//   try {
//     if (this.currentTest?.state === 'failed') {
//       const testName = this.currentTest.title.replace(/ /g, '_');
//       cy.wait(500); // Small wait can help screenshot rendering
//       cy.screenshot(`FAILED_${testName}`);
//     }
//   } catch (err) {
//     // Log the error silently so Cypress won't crash
//     Cypress.log({
//       name: 'afterEach-screenshot-error',
//       message: err.message,
//     });
//   }
// });

afterEach(function () {
  try {
    // const testState = this.currentTest?.state;
    // const testTitle = this.currentTest?.title || 'UNKNOWN_TEST';

    const currentTest = this.currentTest || {};
const testState = currentTest.state;
const testTitle = currentTest.title || 'UNKNOWN_TEST';


    if (testState === 'failed') {
      const filename = `FAILED_${testTitle.replace(/\s+/g, '_')}`;
      cy.wait(500); // Let UI settle before screenshot
      cy.screenshot(filename, { capture: 'runner' }); // Avoid issues with viewport capture
    }
  } catch (err) {
    // Prevent Cypress from crashing silently
    Cypress.log({
      name: 'Safe Screenshot',
      message: `Error in afterEach: ${err.message}`,
      consoleProps: () => ({ err }),
    });
  }
});



});
