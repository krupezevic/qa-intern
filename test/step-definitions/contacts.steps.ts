import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import contactsPage from "../pages/contacts.page";


Given('User is on the Contacts Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    console.log('loginUspesno');
   // await navigationPage.clickOnSubscibersButton();
    //await navigationPage.clickOnMenuButton();
    await navigationPage.navigateToContactsPage();
    console.log('naviUspesno');
    
});


  
When('User tries to edit contact (Nickname))', async () => {
    await contactsPage.selectContact();
    console.log('yyyyyyyy');
    await contactsPage.clickOnEditContactButton();
    await contactsPage.editNickname('Test123123');
  });


Then('Contact is edited', async () => {
    await expect(contactsPage.userNickname).toBeDisplayed();
});
