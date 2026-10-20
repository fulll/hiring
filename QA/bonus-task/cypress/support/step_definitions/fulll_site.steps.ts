import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { fulllHomePage } from '../pages/FulllHomePage';
import { fulllContactPage } from '../pages/FulllContactPage';

Given('the user is on the Fulll homepage', () => {
    fulllHomePage.open();
});

Given('the user is on the Fulll Contact page', () => {
    fulllContactPage.open();
});

When('they open the {string} menu', (menuName: string) => {
    if (menuName.toLowerCase() === 'solutions') {
        fulllHomePage.navigateToSolutionsMenu();
    }
});

When('they select the {string} solution', (solutionName: string) => {
    fulllHomePage.selectSolutionByCategory(solutionName);
});

When('they fill the contact form with:', (dataTable: any) => {
    const data = dataTable.rowsHash();
    fulllContactPage.fillContactForm({
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message
    });
});

When('they submit the form', () => {
    fulllContactPage.submitForm();
});

Then('they should be redirected to the {string} page', (pageName: string) => {
    fulllHomePage.validatePageRedirect(pageName);
});

Then('the page heading should contain {string}', (expectedText: string) => {
    fulllHomePage.validatePageHeading(expectedText);
});

Then('they should see a success message', () => {
    fulllContactPage.validateSuccessMessage();
});
