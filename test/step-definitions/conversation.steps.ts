import { Given, Then, When } from "@wdio/cucumber-framework";
import conversationPage from "../pages/conversation.page";
import loginPage from "../pages/login.page";
import { conversation } from "../test-data/conversation";
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
    await expect(conversationPage.contactIcon).toBeClickable();
});

When('user tries to add tag to the conversation', async () => {
    await conversationPage.tagConversation(conversation.tagName);
});

Then('the tag is added to the conversation', async () => {
    await expect(conversationPage.tagNameText).toHaveTextContaining(conversation.tagName);
});

When('user input text in message box', async () => {
    await conversationPage.messageCharactersDecrement("test");
});

Then('number of remaining characters were decreased', async () => {
    await expect(conversationPage.numberOfCharactersAfterInputMessage).toHaveTextContaining("156");
});

When('user add nickname to contact', async () => {
    await conversationPage.addNicknameToContact(conversation.nickname);
});

Then('user had nickname with first and last name', async () => {
    await expect(conversationPage.nickname).toHaveTextContaining(conversation.nickname);
});

When('user tries to send Vcard', async () => {
    await conversationPage.sendVcardToContact();
});

Then('Vcard download link was sent', async () => {
    await expect(conversationPage.messageList).toHaveTextContaining("Download vCard");
});

When('user tries to create new saved response', async () => {
    await conversationPage.createNewSavedResponse(conversation.tagName, conversation.nickname);
});

Then('new saved response was created', async () => {
    await expect(conversationPage.createdResponse).toHaveTextContaining(conversation.nickname);
});

When('user tries to delete new saved response', async () => {
    await conversationPage.deleteNewSavedResponse(conversation.tagName, conversation.nickname);
});

Then('new saved response was deleted', async () => {
    await expect(conversationPage.responseModal).not.toHaveTextContaining(conversation.nickname);
});