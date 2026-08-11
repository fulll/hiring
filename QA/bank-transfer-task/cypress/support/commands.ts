declare global {
    namespace Cypress {
        interface Chainable {
            loginAs(role: string): Chainable<void>;
        }
    }
}

Cypress.Commands.add('loginAs', (role: string) => {
    cy.log(`Logging in as ${role}`);
});

export { };
