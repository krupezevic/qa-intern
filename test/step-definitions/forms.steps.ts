import { Given, Then, When } from '@wdio/cucumber-framework';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import loginPage from '../pages/login.page';
import navigationPage from '../pages/navigation.page';
import formsPage from '../pages/forms.page';
import actions from '../utils/actions';
import { faker } from '@faker-js/faker';

Given('User is on the Forms Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.formsLink();
});

When('user tries to create New Form', async () => {
    await formsPage.clickOnNewForms();
    await formsPage.createForms('prvaForma2222');
});

Then('new form is created', async () => {
    await expect(formsPage.nameOfTheFirstElementInList).toContain('prvaForma2222');
});


Given('Form is created', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.formsLink();
    await formsPage.clickOnNewForms();
    await formsPage.createForms('zarename99');
});

When('user tries to edit Form', async () => {
    await formsPage.editForms('renamedform99');
});

Then('form is edited', async () => {
    await expect(formsPage.nameOfTheFirstElementInList).toContain('renamedform99');
});


When('user tries to Disable Form', async () => {
    await formsPage.disableForm();
    await browser.pause(5000);
});

Then('new form is created', async () => {
    await expect(formsPage.buttonSave).toHaveElementClassContaining('disabled');
});

// When('User try to rename Tag', async () => { });

// Then('Tag is renamed', async () => { });

// When('User try to sort tags by name in ascending order', async () => { });

// Then('The names are listed in alphabetical order in the opposite direction', async () => { });

// When('User try to sort tags by name in descending order', async () => { });

// Then('The names are listed in alphabetical order', async () => { });

// When('User try to sort tags by CREATED in ascending order', async () => { });

// Then('The values are listed in ascending order', async () => { });

// When('User try to sort tags by CREATED in descending order', async () => { });

// Then('The values are listed in descending order', async () => { });

// When('User try to sort tags by CONTACT in ascending order', async () => { });

// Then('The values are listed in ascending order', async () => { });

// When('User try to sort tags by CONTACT in descending order', async () => { });

// Then('The values are listed in descending order', async () => { });

// When('User try to select all tags', async () => { });

// Then('User has selected all tags', async () => { });

// When('User try to deselect all tags', async () => { });

// Then('User has deselected all tags', async () => { });

// When('User try to combine tags', async () => { });

// Then('Tags are combined', async () => { });
