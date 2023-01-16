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
    await (await updatesPage.noResponseNumber).getText();
    await updatesPage.getNumberOfDidntResponded();
    await (await updatesPage.viewContacts).getText();
})

Then('the user verifies that the numbers match', async () => {
    expect(updatesPage.noResponseNumber).toHaveTextContaining('196');
    expect(updatesPage.viewContacts).toHaveTextContaining('196');
})

When('the user tries to resend update', async () => {
    await updatesPage.clickOnFirstUpdate();
    await (await updatesPage.firstUpdate).getText();
    await updatesPage.resendUpdate();
    await updatesPage.sendUpdate();
})

Then('the update is sent', async () => {
    expect(updatesPage.firstUpdate).not.toHaveTextContaining('the sun began to set, casting');
})

When('the user checks if the number of recipients match with number of contacts', async () => {
    await updatesPage.clickOnFirstUpdate();
    await (await updatesPage.numberOfRecipients).getText();
    await updatesPage.getContacts();
    await (await updatesPage.numberOfContacts).getText();
})

Then('the user verifies that the number is the same', async () => {
    expect(updatesPage.numberOfRecipients).toHaveTextContaining('198');
    expect (updatesPage.numberOfContacts).toHaveTextContaining('199');
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

When('the user clicks on the new update and inputs text', async () => {
    await updatesPage.numberOfCharacters('test');
})

Then('the characters limit is decreased', async () => {
    expect (updatesPage.charactersLimit).toHaveTextContaining('156');
})

When('the user tries to create a segment on update', async () => {
    await updatesPage.updateSegment('segment');
})

Then('the segment is created', async () => {
    expect(updatesPage.segmentLabel).toHaveText('Added This Year');
})