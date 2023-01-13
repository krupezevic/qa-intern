import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import updatesPage from "../pages/updates.page";
import { updates } from '../test-data/updates';

Given('the user is on updates page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToUpdatesPage();
})

When('the user tries to send a scheduled update', async () => {
    await updatesPage.newUpdate('Hello <fname>');
    await updatesPage.sendUpdate();
    await updatesPage.checkScheduledUpdate();
})

Then('the previously scheduled update should be visible in the Scheduled Updates filter', async () => {
    await expect(updatesPage.checkUpdate).toHaveTextContaining('1 UPDATE');
})

When('the user checks if the number of contacts who did not responded matches with the number on the view contacts page', async () => {
    await updatesPage.clickOnFirstUpdate();
    await updatesPage.getNumberOfDidntResponded();
})

Then('the user verifies that the numbers match', async () => {
    expect(updatesPage.viewContacts == updatesPage.noResponseNumber);
})

When('the user tries to resend update', async () => {
    await updatesPage.clickOnFirstUpdate();
    await updatesPage.resendUpdate();
    await updatesPage.sendUpdate();
    await updatesPage.checkScheduledUpdate();
})

Then('the update is sent', async () => {
    expect(updatesPage.checkUpdate).toHaveTextContaining('1 UPDATE');
})

When('the user checks if the number of recipients match with number of contacts', async () => {
    await updatesPage.clickOnFirstUpdate();
    await updatesPage.getContacts();
})

Then('the user verifies that the number is the same', async () => {
    expect(updatesPage.numberOfRecipients == updatesPage.numberOfContacts);
})

Given('the user is on compliance page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToCompliancePage();
})

When('the user tries to change brand name and opt out', async () => {
    await updatesPage.brandOptUpdate(updates.optOut, updates.brandName);
    await navigationPage.navigateToUpdatesPage();
    await updatesPage.settingsChanges();
})

Then('the brand name and opt out is changed', async () => {
    expect(updatesPage.editorContainer).toHaveTextContaining(updates.brandName);
    expect(updatesPage.editorContainer).toHaveTextContaining(updates.optOut);
})