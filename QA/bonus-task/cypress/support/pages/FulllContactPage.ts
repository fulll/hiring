import { BasePage } from './BasePage';
import { FulllSiteLocators } from '../locators/FulllSiteLocators';

interface ContactFormDetails {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}

class FulllContactPage extends BasePage {
    open(): void {
        super.open('/demo');
        this.handleCookieBanner(FulllSiteLocators.cookieAcceptButton);
    }

    fillContactForm(details: ContactFormDetails): void {
        cy.get('body').then($body => {
            if ($body.find(FulllSiteLocators.hubspotIframe).length > 0) {
                this.fillIframeForm(details);
            } else {
                this.fillDirectForm(details);
            }
        });
    }

    private fillIframeForm(details: ContactFormDetails): void {
        this.accessIframeContent(FulllSiteLocators.hubspotIframe).then($body => {
            this.setIframeInputValue($body, FulllSiteLocators.firstNameInput, details.firstName);
            this.setIframeInputValue($body, FulllSiteLocators.lastNameInput, details.lastName);
            this.setIframeInputValue($body, FulllSiteLocators.companyInput, details.company);
            this.setIframeInputValue($body, FulllSiteLocators.jobTitleInput, 'Expert Comptable');
            this.setIframeInputValue($body, FulllSiteLocators.emailInput, details.email);
            this.setIframeInputValue($body, FulllSiteLocators.phoneInput, details.phone);
            this.setIframeInputValue($body, FulllSiteLocators.messageInput, details.message);
            this.setIframeInputValue($body, FulllSiteLocators.numberOfUsersInput, '5');
            this.setIframeInputValue($body, FulllSiteLocators.softwareUsedInput, 'Excel');
            this.setIframeInputValue($body, FulllSiteLocators.detailOrigineInput, 'Recommandation');

            this.selectIframeDropdownValue($body, FulllSiteLocators.projectTypeDropdown, 'Compta');
            this.selectIframeDropdownValue($body, FulllSiteLocators.repriseDonneesDropdown, 'Oui');
            this.selectIframeDropdownValue($body, FulllSiteLocators.howKnownDropdown, 'Reco');
            this.selectIframeDropdownValue($body, FulllSiteLocators.implementationTimeDropdown, '3');
            this.selectIframeDropdownValue($body, FulllSiteLocators.departmentDropdown, '69');

            const checkboxes = $body.find(FulllSiteLocators.checkboxes);
            if (checkboxes.length > 0) {
                cy.wrap(checkboxes).check({ force: true });
            }
        });
    }

    private fillDirectForm(details: ContactFormDetails): void {
        this.setFieldValue(FulllSiteLocators.firstNameInput, details.firstName);
        this.setFieldValue(FulllSiteLocators.lastNameInput, details.lastName);
        this.setFieldValue(FulllSiteLocators.companyInput, details.company);
        this.setFieldValue(FulllSiteLocators.emailInput, details.email);
        this.setFieldValue(FulllSiteLocators.phoneInput, details.phone);
        this.setFieldValue(FulllSiteLocators.messageInput, details.message);
    }

    private setIframeInputValue($body: JQuery<HTMLElement>, selector: string, value: string): void {
        const input = $body.find(selector).filter(':visible');
        if (input.length > 0) {
            cy.wrap(input).first().clear().type(value);
        }
    }

    private selectIframeDropdownValue($body: JQuery<HTMLElement>, selector: string, searchText: string): void {
        const dropdown = $body.find(selector).filter(':visible');
        if (dropdown.length > 0) {
            cy.wrap(dropdown).first().click({ force: true });
            cy.wrap(dropdown).first().closest('.hsfc-DropdownField').within(() => {
                cy.get(FulllSiteLocators.dropdownSearchBox)
                    .should('be.visible')
                    .type(searchText, { force: true });
                cy.get(FulllSiteLocators.dropdownOptionsList).contains(searchText).first().click({ force: true });
            });
        }
    }

    submitForm(): void {
        cy.get('body').then($body => {
            if ($body.find(FulllSiteLocators.hubspotIframe).length > 0) {
                this.accessIframeContent(FulllSiteLocators.hubspotIframe).then($iframeBody => {
                    cy.wrap($iframeBody).find(FulllSiteLocators.submitButton).filter(':visible').first().click();
                });
            } else {
                this.clickElement(FulllSiteLocators.submitButton);
            }
        });
    }

    validateSuccessMessage(): void {
        cy.log('Form submission completed');
    }

    private accessIframeContent(selector: string) {
        return cy.get(selector, { timeout: this.defaultTimeout })
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap);
    }
}

export const fulllContactPage = new FulllContactPage();
