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

When('user tries to add tag', async () => {
    await contactsPage.addTag(contacts.tagName);
});

Then('tag is added', async () => {
    const tag=await contactsPage.getTextTagName();
    console.log(tag);
    console.log(contactsPage.getTextTagName);
    //await expect(contactsPage.getTextTagName()).toHaveTextContaining(contacts.tagName);
    //await expect(contactsPage.getTextContactNameDetailsBar).toHaveTextContaining('Lemke');     
});

When('user tries to enter text message', async () => {
    await contactsPage.enterTextMessage('Message is entered');
});

Then('characters limit number is changed', async () => {
    await expect(contactsPage.countBoxTextInput).toHaveText('142');
});

When('user tries to create new data field', async () => {
    await contactsPage.createNewDataField(contacts.fieldName);
});

Then('data field is created', async () => {
    await expect(contactsPage.nameDataFieldForAssertion).toHaveText(contacts.fieldName);
});

When('user tries to create new contact', async () => {
    await contactsPage.createNewContact(contacts.firstName, contacts.lastName, contacts.phoneNumber, contacts.email);
});

Then('contact is created', async () => {
    await expect(contactsPage.contactFromList).toHaveTextContaining(contacts.firstName);
    await expect(contactsPage.contactFromList).toHaveTextContaining(contacts.lastName);
});