import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import profilePage from "../pages/profile.page";
import { dynamicVCard } from "../test-data/dynamicVCard";

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
    await expect(profilePage.firstNameDynamicVCard).toHaveValue(dynamicVCard.firstName);
    await expect(profilePage.lastNameDynamicVCard).toHaveValue(dynamicVCard.lastName);
    await expect(profilePage.title).toHaveValue(dynamicVCard.title);
    await expect(profilePage.organization).toHaveValue(dynamicVCard.organization);
    await expect(profilePage.email).toHaveValue(dynamicVCard.email);
    await expect(profilePage.facebook).toHaveValue(dynamicVCard.facebook);
    await expect(profilePage.instagram).toHaveValue(dynamicVCard.instagram);
    await expect(profilePage.twitter).toHaveValue(dynamicVCard.twitter);
    await expect(profilePage.linkedin).toHaveValue(dynamicVCard.linkedin);
    await expect(profilePage.youtube).toHaveValue(dynamicVCard.youtube);
    await expect(profilePage.snapchat).toHaveValue(dynamicVCard.snapchat);
    await expect(profilePage.soundcloud).toHaveValue(dynamicVCard.soundcloud);
    await expect(profilePage.store).toHaveValue(dynamicVCard.store);
    await expect(profilePage.website).toHaveValue(dynamicVCard.website);
    await expect(profilePage.zipCode).toHaveValue(dynamicVCard.zipCode);
    await expect(profilePage.note).toHaveValue(dynamicVCard.note);
})