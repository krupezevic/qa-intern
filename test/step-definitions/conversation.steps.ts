import { Given, Then, When } from "@wdio/cucumber-framework";
import conversationPage from "../pages/conversation.page";
import loginPage from "../pages/login.page";
import actions from "../utils/actions";


Given('user is on the conversation page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
});

When('user tries to send new message', async () => {
    await conversationPage.sendMessage("message");
});

Then('new message was sent', async () => {
    await actions.waitForElementToBeDisplayed(conversationPage.succesMessageConfirmation);
    await expect(conversationPage.succesMessageConfirmation).toHaveTextContaining("Message sent successfully");
});

When('user tries to send saved response', async () => {
    await conversationPage.sendSavedResponse();
});

When('user tries to archive conversation', async () => {
    await conversationPage.archiveConversation();
});

Then('the conversation was archived', async () => {
    await conversationPage.archivedConversationList.sumTableRows + 1;
});