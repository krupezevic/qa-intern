import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import tagsPage from "../pages/tags.page";


Given('User is on the Tags Page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.tags();
 });
    
When('user clicks on New button', async () => {
    await tagsPage.clickOnNewTag();
 });
    
When('user tries to create New Tag name with empty filed', async () => { 
    await tagsPage.createTags("");
});

Then('save button is disabled', async () => {

 });

When('user tries to create New tag name', async () => {
    await tagsPage.createTags("Percan");

 });

Then('tag is created', async () => { 
    await expect(tagsPage.selectTagsByName).toHaveText("Percan");
    await expect(tagsPage.timeCreated).toHaveText("a few seconds ago")
});

When('user marks any tag', async () => {
    await tagsPage.selectByUserName("Percan");

    
 });

When('user tries to delete tag', async () => { 
    await tagsPage.deleteFirstUser();
});

Then('tag is removed', async () => { 
    await tagsPage.checkNUmberOfRowsAfterDelete();
});

// When('user marks any tag', async () => { });

// When('user tries to rename tag', async () => { });

// Then('tag is renamed', async () => { });

// When('user sorts tags by name in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts tags by name in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user sorts tags by created in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts tags by created in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user sorts tags by contact in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts tags by contact in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user tries to select all tags', async () => { });

// Then('user selected all tags', async () => { });

// When('user tries to deselect all tags', async () => { });

// Then('user has deselected all tags', async () => { });

// When('user tries to combine tags', async () => { });

// Then('tags are combined', async () => { });
