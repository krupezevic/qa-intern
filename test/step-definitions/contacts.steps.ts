import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import contactsPage from "../pages/contacts.page";


Given('user is on the Contacts Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToContactsPage();
    console.log('naviUspesno');
   
});

When('user tries to edit contact', async () => {
    console.log('ereeeeee')
    
    await contactsPage.clickOnContact();
    console.log('yyyyyyyy');
    await contactsPage.clickOnEditContactButton();
    console.log('contact is clicked');
    await contactsPage.editNickname('Test123123');
});

Then('contact is edited', async () => {
    await expect(contactsPage.userNickname).toHaveTextContaining("Test123123");
});
