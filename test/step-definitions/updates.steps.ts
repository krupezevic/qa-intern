import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import updatesPage from "../pages/updates.page";
import { updates } from '../test-data/updates';

let noResponse: string;
let contacts: string;
let recipients: string;
let update: string;

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
    await expect (updatesPage.firstUpdate).toHaveTextContaining('Hello <fname>');
})

When('the user checks if the number of contacts who did not responded matches with the number on the view contacts page', async () => {
    await (updatesPage.secondUpdate).click()
    noResponse = updatesPage.noResponseText();
    await updatesPage.getNumberOfDidntResponded();
    contacts = updatesPage.allContactsText();
})

Then('the user verifies that the numbers match', async () => {
    console.log(noResponse);
    console.log(contacts);
})

When('the user tries to resend update', async () => {
    update = updatesPage.secondUpdateText();
    await updatesPage.clickOnFirstUpdate();
    await updatesPage.resendUpdate();
    await updatesPage.sendUpdate();
})

Then('the update is sent', async () => {
    console.log(update);
})

When('the user checks if the number of recipients match with number of contacts', async () => {
    await (updatesPage.secondUpdate).click();
    recipients = updatesPage.numberOfRecipientsText();
    await updatesPage.allContactsLink.click();
    contacts = updatesPage.allContactsText();
})

Then('the user verifies that the number is the same', async () => {
    console.log(recipients);
    console.log(contacts);
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

When('the user tries to create new saved response', async () => {
    await updatesPage.newSavedResponse('Hey!', 'This New Response');
})

Then ('the new saved response is created', async () => {
    expect (updatesPage.allSavedResponses).toHaveTextContaining('This New Response');
})

When ('the user tries to delete saved response', async () => {
    await updatesPage.deleteSavedResponse('Hey!', 'This New Response', 'This');
})

Then ('the saved response is deleted', async () => {
    expect(updatesPage.noResponseFound).toExist();
})