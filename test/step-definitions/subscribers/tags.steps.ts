import { Given, Then, When } from '@wdio/cucumber-framework';
import navigationPage from '../../pages/navigation.page';
import tagsPage from '../../pages/subscribers/tags.page';
import loginPage from '../../pages/login.page';
import { contacts } from "../../test-data/contacts";

const {tagName} = contacts;

Given('user is on the Tags Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToTagsPage(); 
});

When('user tries to create New tag name', async () => {
    await tagsPage.createNewTags(tagName);
});

Then('tag is created and displayed', async () => {
    await expect(tagsPage.firstTagNameForAssertion).toHaveText(tagName);
});

When('user tries to delete tag', async () => {
    await tagsPage.deleteFirstTag();
});

Then('tag is deleted', async () => {
    await expect(tagsPage.firstTagNameForAssertion).not.toHaveText('fine');
});

When('user tries to rename tag', async () => {
    await tagsPage.renameFirstTag(tagName);
});

Then('tag is renamed', async () => {
    await expect(tagsPage.firstTagNameForAssertion).toHaveText(tagName);
});

When('user tries to combine tags', async () => {
    await tagsPage.combineTags(tagName);
});

Then('tags are combined', async () => {
    await expect(tagsPage.firstTagNameForAssertion).toHaveText(tagName);
});