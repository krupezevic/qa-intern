import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../../pages/login.page";
import navigationPage from "../../pages/navigation.page";
import profilePage from "../../pages/settings/profile.page";
import { conversation } from "../../test-data/conversation";

const {tagName, nickname, firstName} = conversation;

Given('user is on profile page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToProfilePage();
});

When('user tries to upload image', async () => {
    await profilePage.uploadImage('puppy');
});

Then('image was uploaded', async () => {
    
});

When('user tries to change first and last name', async () => {
    await profilePage.changeFirstAndLastName(conversation.firstName, conversation.lastName);
});

Then('first and last name were changed', async () => {
    
});

When('user tries to change password without confirming new password', async () => {
    await profilePage.invalidPasswordChange(tagName, nickname, firstName);
});

Then('password was not changed', async () => {
    await expect(profilePage.savePasswordButton).not.toBeClickable();
});

When('user change current password', async () => {
    await profilePage.passwordChange(tagName, nickname, nickname);
});

Then('the password was changed', async () => {
    await expect(profilePage.savePasswordButton).toBeClickable();
});