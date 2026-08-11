export class BasePage {
    open(path: string) {
        cy.visit(path);
    }

    setFieldValue(selector: string, value: string) {
        cy.get(selector).should('be.visible').clear().type(value);
    }

    clickElement(selector: string) {
        cy.get(selector).should('be.visible').click();
    }

    selectCheckboxOrRadio(selector: string) {
        cy.get(selector).check();
    }

    checkElementPresence(selector: string, isVisible: boolean) {
        const state = isVisible ? 'be.visible' : 'not.exist';
        cy.get(selector).should(state);
    }

    verifyElementContainsText(selector: string, text: string) {
        cy.get(selector).should('be.visible').and('contain', text);
    }

    verifyUrlMatching(path: string) {
        cy.url().should('include', path.toLowerCase());
    }

    calculateDate(phrase: string): string {
        const date = new Date();
        const daysToAdd = phrase === 'tomorrow' ? 1 :
            phrase === 'yesterday' ? -1 :
                parseInt(phrase) || 0;

        date.setDate(date.getDate() + daysToAdd);
        return date.toISOString().split('T')[0];
    }
}
