import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import profilePage from "../pages/profile.page";

Given('user is on Profile page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToProfilePageAndClick();
});

When('user tries to change profiles name and lastname', async () => {
    await profilePage.enterNameAndLastnameFieldsAndClick("example", "example2");
});

Then('name and lastname are changed', async () => {
    await expect(profilePage.firstName).toHaveValueContaining("example");
    await expect(profilePage.lastName).toHaveValueContaining("example2");
});

When('user tries to change password', async () => {
    await profilePage.enterPasswordFields(`${process.env.PASSWORD}`,`${process.env.PASSWORD}`,`${process.env.PASSWORD}`);
});

Then('password is changed',async () => {
    await profilePage.logoutAndLogInToAccount();
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await expect(profilePage.userInfo).toBeDisplayed();
});

When('user tries to insert values in all fields', async () => {
    await profilePage.enterAllDynamicVCardFields();
});

Then('populated fields are saved',async () => {
    await expect(profilePage.firstNameDynamicVCard).toHaveValue("sample1");
    await expect(profilePage.lastNameDynamicVCard).toHaveValue("sample2");
    await expect(profilePage.title).toHaveValue("sample3");
    await expect(profilePage.organization).toHaveValue("sample4");
    await expect(profilePage.email).toHaveValue("Emailmail1@gmail.com");
    await expect(profilePage.facebook).toHaveValue("https://facebook.com/test1");
    await expect(profilePage.instagram).toHaveValue("https://instagram.com/test1");
    await expect(profilePage.twitter).toHaveValue("https://twitter.com/Test");
    await expect(profilePage.linkedin).toHaveValue("https://linkedin.com/in/test1");
    await expect(profilePage.youtube).toHaveValue("https://youtube.com/test");
    await expect(profilePage.snapchat).toHaveValue("https://snapchat.com/add/test");
    await expect(profilePage.soundcloud).toHaveValue("https://soundcloud.com/test");
    await expect(profilePage.store).toHaveValue("sample5");
    await expect(profilePage.webSite).toHaveValue("sample6");
    await expect(profilePage.zipCode).toHaveValue("sample7");
    await expect(profilePage.note).toHaveValue("sample8");
})