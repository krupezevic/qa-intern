import { Given, Then, When } from '@wdio/cucumber-framework';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import loginPage from '../pages/login.page';
import navigationPage from '../pages/navigation.page';
import formsPage from '../pages/forms.page';
import actions from '../utils/actions';

Given('User is on the Forms Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.formsLink();
});

When('user tries to create New Form', async () => {
    await formsPage.clickOnNewForms();
    await formsPage.createForms('prvaforma777777');
});

Then('new form is created', async () => {
    await expect(formsPage.nameOfTheFirstElementInList).toHaveText('prvaforma777777.superphone-stage.com');
});


Given('Form is created', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.formsLink();
    await formsPage.clickOnNewForms();
    await formsPage.createForms('zarename104019');
});

When('user tries to edit Form', async () => {
    await formsPage.editForms('renamedform104011');
});

Then('form is edited', async () => {
    await expect(formsPage.nameOfTheFirstElementInList).toHaveText('renamedform104011.superphone-stage.com');
});


When('user tries to Disable Form', async () => {
    await formsPage.disableForm();
});

Then('form is Disabled', async () => {
    await expect(formsPage.buttonDisable).toHaveElementClassContaining('Enable');
});
