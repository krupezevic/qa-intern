import { Given, Then, When } from '@wdio/cucumber-framework';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import loginPage from '../pages/login.page';
import navigationPage from '../pages/navigation.page';
import tagsPage from '../pages/tags.page';
import actions from '../utils/actions';

Given('User is on the Tags Page', async () => {
  await loginPage.login(
    `${process.env.CHARGEBEE_EMAIL}`,
    `${process.env.PASSWORD}`
  );
  await navigationPage.tagsLink();
});

When('user tries to create New tag name', async () => {
  await tagsPage.clickOnNewTag();
  await tagsPage.createTags('Percan');
});

Then('created tag is displayed', async () => {
  await expect(tagsPage.selectFirstTagByName).toHaveText('Percan');
});


Given('new tag is created', async () => {
  await loginPage.login(
    `${process.env.CHARGEBEE_EMAIL}`,
    `${process.env.PASSWORD}`
  );
  await navigationPage.tagsLink();
  await tagsPage.clickOnNewTag();
  await tagsPage.createTags('Percan');
});

When('user tries to delete tag', async () => {
  await tagsPage.deleteFirstUser();
});

Then('tag is removed', async () => {
  await expect(tagsPage.selectFirstTagByName).not.toHaveText('Percan');
});


When('user tries to rename tag', async () => {
  await tagsPage.renameFirstUser("Bojan");
});

Then('tag is renamed', async () => {
  await expect(tagsPage.selectFirstTagByName).toHaveText('Bojan');
});


Given('Tags for combine are created', async () => {
  await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
  await navigationPage.tagsLink();
  await tagsPage.clickOnNewTag();
  await tagsPage.createTags('Percan');
  await tagsPage.clickOnNewTag();
  await tagsPage.createTags('Bojan');
});

When('user tries to combine tags', async () => {
  await tagsPage.selectFirstTwoTags();
  await tagsPage.combineTwoTags('Nesto trece');
});

Then('tags are combined', async () => {
  await expect(tagsPage.selectFirstTagByName).toHaveText('Nesto trece');
});