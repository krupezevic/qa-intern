import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import updatesPage from "../pages/updates.page";

Given('the user is on updates page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToUpdatesAndCLick();
})

When('the user tries to send a scheduled update', async () => {
    await updatesPage.newScheduledUpdate('Hello <fname>');
    await updatesPage.sendScheduledUpdate();
})

Then('the previously scheduled update should be visible in the Scheduled Updates filter', async () => {
    await updatesPage.checkScheduledUpdate();
    await expect(updatesPage.checkUpdate).toHaveTextContaining('1 Update');
})