import {Then, When} from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import firstEntryScreenPage from "../pages/first-entry-screen.page";
import navigationPage from "../pages/navigation.page";

When('user is on Profile page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
});

When('', async () => {
});