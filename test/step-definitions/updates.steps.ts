import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import updatesPage from "../pages/updates.page";

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
    await updatesPage.checkNumberOfDidntResponded();
    await expect(updatesPage.numberOfDidntRespond).toHaveTextContaining("196 Didn't Respond");
    await updatesPage.verifyNumberOfDidntResponded();
})

Then('the user verifies that the numbers match', async () => {
    await expect(updatesPage.verifyNumberOfDidntRespond).toHaveTextContaining('196');
})

When('the user tries to resend update', async () => {
    await updatesPage.checkNumberOfDidntResponded();
    await updatesPage.resendUpdate(' ');
    console.log('nalazim se ovde');
    await browser.pause(3000);
    await updatesPage.sendUpdate();
    await updatesPage.checkScheduledUpdate();
})

Then('the update is sent', async () => {
    expect(updatesPage.checkUpdate).toHaveTextContaining('1 UPDATE');
})

