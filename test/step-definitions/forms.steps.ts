import { Given, Then, When } from '@wdio/cucumber-framework';
import loginPage from '../pages/login.page';
import navigationPage from '../pages/navigation.page';
import formsPage from '../pages/forms.page';
import actions from '../utils/actions';

Given('User is on the Forms Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.formsLink();
});

When('user tries to create New form', async () => {
    await formsPage.clickOnNewForm();
    await formsPage.createForm('prvaforma777777');
});

Then('new form is created', async () => {
    await expect(formsPage.nameOfTheFirstElementInList).toHaveText('prvaforma777777.superphone-stage.com');
});


Given('Form is created', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.formsLink();
    await formsPage.clickOnNewForm();
    await formsPage.createForm('zarename10004');
});

When('user tries to edit form', async () => {
    await formsPage.editForm('renamedform10005');
});

Then('form is edited', async () => {
    await expect(formsPage.nameOfTheFirstElementInList).toHaveText('renamedform10005.superphone-stage.com');
});


When('user tries to Disable form', async () => {
    await formsPage.disableForm();
});

Then('form is Disabled', async () => {
    await expect(formsPage.buttonDisable).toHaveElementClassContaining('Enable');
});
