import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { bankTransferPage } from "../pages/BankTransferPage";

Given("the user is logged in as an {string}", (role: string) => {
    cy.loginAs(role);
});

Given("the user navigates to the {string} creation page", () => {
    bankTransferPage.visit();
});

When("they fill the transfer form using {string} data", (dataKey: string) => {
    cy.fixture('transferData').then((data) => {
        const transfer = data[dataKey];
        bankTransferPage.fillTransferDetails("beneficiary-name", transfer.beneficiary);
        bankTransferPage.fillTransferDetails("iban", transfer.iban);
        bankTransferPage.fillTransferDetails("label", transfer.label);
        bankTransferPage.fillTransferDetails("amount", transfer.amount);
    });
});

When("they enter an amount from fixture {string}", (dataKey: string) => {
    cy.fixture('transferData').then((data) => {
        bankTransferPage.fillTransferDetails("amount", data.amountLimits[dataKey]);
    });
});

When("they enter an IBAN length from fixture {string}", (dataKey: string) => {
    cy.fixture('transferData').then((data) => {
        const length = data.ibanLengths[dataKey];
        bankTransferPage.fillTransferDetails("iban", "A".repeat(length));
    });
});

When("they enter the invalid label from fixture", () => {
    cy.fixture('transferData').then((data) => {
        bankTransferPage.fillTransferDetails("label", data.labels.invalid);
    });
});

When("they fill in the transfer form with the following data:", (table: any) => {
    const data = table.rowsHash();
    bankTransferPage.fillTransferDetails("beneficiary-name", data["Beneficiary Name"]);
    bankTransferPage.fillTransferDetails("iban", data["IBAN"]);
    bankTransferPage.fillTransferDetails("label", data["Label"]);
    bankTransferPage.fillTransferDetails("amount", data["Amount"]);
});

When("they enter an amount of {string}", (amount: string) => {
    bankTransferPage.fillTransferDetails("amount", amount);
});

When("they enter an IBAN with length {int}", (length: number) => {
    bankTransferPage.fillTransferDetails("iban", "A".repeat(length));
});

When("they enter a label {string}", (label: string) => {
    bankTransferPage.fillTransferDetails("label", label);
});

When("they select the {string} transfer mode", (mode: string) => {
    bankTransferPage.selectTransferMode(mode);
});

When("they set the transfer date to {string}", (phrase: string) => {
    bankTransferPage.setDate(phrase);
});

When("they submit the transfer form", () => {
    bankTransferPage.submitTransfer();
});

When("they attempt to access the bank transfer creation page", () => {
    bankTransferPage.visit();
});

Then("a success notification {string} should be displayed", (message: string) => {
    bankTransferPage.validateSuccessMessage(message);
});

Then("they should see a validation message for {string} as {string}", (value: string, status: string) => {
    const isError = status === "Error";
    isError ? bankTransferPage.validateFieldVisibility("amount", true) :
        bankTransferPage.validateSuccessMessage("created");
});

Then("they should see a validation status for {string} as {string}", (field: string, status: string) => {
    bankTransferPage.validateFieldVisibility(field.toLowerCase(), status === "Error");
});

Then("the system should {string} the date", (outcome: string) => {
    bankTransferPage.validateFieldVisibility("transfer-date", outcome === "Reject");
});

Then("they should see an error for the {string} field", (field: string) => {
    bankTransferPage.validateFieldVisibility(field.toLowerCase(), true);
});

Then("they should be redirected to the {string}", (page: string) => {
    bankTransferPage.verifyUrlMatching(page);
});

Then("the transfer form should not be accessible", () => {
    bankTransferPage.validateFormAccessibility(false);
});
