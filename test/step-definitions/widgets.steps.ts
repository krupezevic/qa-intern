import {Given, Then, When} from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import widgetsPage from "../pages/widgets.page";

Given('user is on Widgets page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToWidgetsPage();
});

When('user tries to create new widget', async () => {
    await widgetsPage.createNewWidget('Widget007', 'a', 'newTagsad');
});

Then('widget is created', async () => {
    await expect(widgetsPage.nameOfTheFirstElementInList).toContain('Widget007.');
});

Given('new widget is created', async () => {
 
});

When('user tries to edit new widget', async () => {
 
});

Then('widget is edited', async () => {
 
});