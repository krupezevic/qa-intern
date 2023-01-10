import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import contactsPage from "../pages/contacts.page";
import { contacts } from "../test-data/contacts";
import { setTimeout } from "timers";

Given('user is on the Contacts Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToContactsPage();
});

When('user tries to edit contact', async () => {
    await contactsPage.clickOnContact();
    await contactsPage.clickOnEditContactButton();
    await contactsPage.editNickname();
});

Then('contact is edited', async () => {
    await expect(contactsPage.userNickname).toHaveText(contacts.nickname);
});

When('user tries to add contribution', async () => {
    await contactsPage.clickOnContact();
    await contactsPage.clickOnEditContactButton();
    await contactsPage.clickOnAddContrabution();
    
    await contactsPage.insertCommerceName();
    console.log('InsertString');
    await contactsPage.insertCommerceAmount();
    console.log('InsertNumber');
    await contactsPage.clickOnSave;
    console.log('saved');
    await contactsPage.clickOnSpentValue
    console.log('clicked');
});

Then('contribution is added', async () => {
    console.log('1111');
    console.log(contactsPage.nameForAssertion); 
    console.log(contactsPage.amountForAssertion);   
    //await expect(contactsPage.amountForAssertion).toHaveTextContaining(contacts.commerceAmount);
    console.log('2222222');    
});