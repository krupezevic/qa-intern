import { Given, Then, When } from "@wdio/cucumber-framework";
import conversationPage from "../pages/conversation.page";
import loginPage from "../pages/login.page";
import actions from "../utils/actions";


Given('User is on the conversation page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
});

When('User tries to send new message', async () => {
    await conversationPage.sendMessage("message");
});

Then('User sent new message', async () => {
    await actions.waitForElementToBeDisplayed(conversationPage.succesMsgConfirmation);
    await expect(conversationPage.succesMsgConfirmation).toHaveTextContaining("Message sent successfully");
});





When('User tries to send saved response', async () => {
    await conversationPage.sendSavedResponse();
});

// Then('User sent new message', async () => {
//     await actions.waitForElementToBeDisplayed(conversationPage.succesMsgConfirmation);
//     await expect(conversationPage.succesMsgConfirmation).toHaveTextContaining("Message sent successfully");
// });