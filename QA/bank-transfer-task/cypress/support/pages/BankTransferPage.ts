import { BasePage } from "./BasePage";
import { Locators } from "../locators/BankTransferLocators";

class BankTransferPage extends BasePage {

    visit() {
        this.open('/transfers/create');
    }

    fillTransferDetails(fieldName: string, value: string) {
        this.setFieldValue(Locators.formField(fieldName), value);
    }

    selectTransferMode(mode: string) {
        this.selectCheckboxOrRadio(Locators.formField(`mode-${mode.toLowerCase()}`));
    }

    setDate(phrase: string) {
        const formattedDate = this.calculateDate(phrase);
        this.setFieldValue(Locators.formField('transfer-date'), formattedDate);
    }

    submitTransfer() {
        this.clickElement(Locators.submitButton);
    }

    validateSuccessMessage(expectedText: string) {
        this.verifyElementContainsText(Locators.notification, expectedText);
    }

    validateFieldVisibility(field: string, isVisible: boolean) {
        this.checkElementPresence(Locators.errorMessage(field), isVisible);
    }

    validateFormAccessibility(shouldBeVisible: boolean) {
        this.checkElementPresence(Locators.submitButton, shouldBeVisible);
    }
}

export const bankTransferPage = new BankTransferPage();
