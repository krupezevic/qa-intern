import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import profilePage from "../pages/profile.page";
import { sample } from "../test-data/dynamicVCard";

Given('user is on Profile page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToProfilePage();
});

When('user tries to change profiles name and lastname', async () => {
    await profilePage.enterNameAndLastnameFields("example", "example2");
});

Then('name and lastname are changed', async () => {
    await expect(profilePage.firstName).toHaveValueContaining("example");
    await expect(profilePage.lastName).toHaveValueContaining("example2");
});

When('user tries to change password', async () => {
    const currentPassword = `${process.env.PASSWORD}`;
    const newPassword = `${process.env.PASSWORD}`;

    await profilePage.enterPasswordFields(currentPassword, newPassword, newPassword);
    await profilePage.logoutFromAccount();
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
});

Then('password is changed', async () => {
    await expect(profilePage.userInfo).toBeDisplayed();
});

When('user tries to insert values in all fields', async () => {
    await profilePage.enterAllDynamicVCardFields();
});

Then('populated fields are saved', async () => {
    await expect(profilePage.firstNameDynamicVCard).toHaveValue(sample.firstName);
    await expect(profilePage.lastNameDynamicVCard).toHaveValue(sample.lastName);
    await expect(profilePage.title).toHaveValue(sample.title);
    await expect(profilePage.organization).toHaveValue(sample.organization);
    await expect(profilePage.email).toHaveValue(sample.email);
    await expect(profilePage.facebook).toHaveValue(sample.facebook);
    await expect(profilePage.instagram).toHaveValue(sample.instagram);
    await expect(profilePage.twitter).toHaveValue(sample.twitter);
    await expect(profilePage.linkedin).toHaveValue(sample.linkedin);
    await expect(profilePage.youtube).toHaveValue(sample.youtube);
    await expect(profilePage.snapchat).toHaveValue(sample.snapchat);
    await expect(profilePage.soundcloud).toHaveValue(sample.soundcloud);
    await expect(profilePage.store).toHaveValue(sample.store);
    await expect(profilePage.website).toHaveValue(sample.website);
    await expect(profilePage.zipCode).toHaveValue(sample.zipCode);
    await expect(profilePage.note).toHaveValue(sample.note);
})