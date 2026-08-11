export class BasePage {
    protected readonly defaultTimeout = 15000;

    open(path: string): void {
        cy.visit(path);
    }

    setFieldValue(selector: string, value: string): void {
        cy.get(selector, { timeout: this.defaultTimeout })
            .should('be.visible')
            .first()
            .clear()
            .type(value);
    }

    clickElement(selector: string): void {
        cy.get(selector, { timeout: this.defaultTimeout })
            .should('be.visible')
            .first()
            .click({ force: true });
    }

    waitForVisible(selector: string): void {
        cy.get(selector, { timeout: this.defaultTimeout }).should('be.visible');
    }

    verifyUrlMatching(expectedUrl: string): void {
        cy.url().should('include', expectedUrl);
    }

    verifyHeadingContains(text: string): void {
        cy.get('h1', { timeout: this.defaultTimeout })
            .should('be.visible')
            .invoke('text')
            .then(headingText => {
                expect(headingText.toLowerCase()).to.include(text.toLowerCase());
            });
    }

    handleCookieBanner(selector: string): void {
        cy.get('body').then($body => {
            if ($body.find(selector).length > 0) {
                cy.get(selector).should('be.visible').click({ force: true });
            }
        });
    }

    calculateDate(daysToAdd: number): string {
        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);
        return date.toISOString().split('T')[0];
    }
}
