import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import contactsPage from "../pages/contacts.page";
import { contacts } from "../test-data/contacts";

Given('user is on the Contacts Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToContactsPage();
});

When('user tries to edit contact', async () => {
    await contactsPage.editNickname();
});

Then('contact is edited', async () => {
    await expect(contactsPage.userNickname).toHaveText(contacts.nickname);
});

When('user tries to add contribution', async () => {
    await contactsPage.addContrabution();
});

Then('contribution is added', async () => {
    await expect(contactsPage.amountForAssertion).toHaveTextContaining(contacts.commerceAmount);
    await expect(contactsPage.nameForAssertion).toHaveText(contacts.commerceName);     
});