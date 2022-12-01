import { Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import firstEntryScreenPage from "../pages/first-entry-screen.page";

When('user tries to login with valid credentials', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
});

When('user tries to login with invalid password', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, 'test1234');
});

When('user tries to login with invalid email', async () => {
    await loginPage.login('test@test.com', 'test1234');
});

When('user tries to login with empty email', async () => {
    await loginPage.login('', 'test1234');
});

When('user tries to login with empty password', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, '');
});

Then('user is logged in', async () => {
    await expect(firstEntryScreenPage.title).toHaveTextContaining('Conversations');
});

Then('error is shown with message {string}', async (message: string) => {
    await expect(loginPage.errorMessage).toHaveTextContaining(message);
});

Then('validation is shown with message {string}', async (errorMessage: string) => {
    await expect(loginPage.errorEmailInputMessage).toHaveTextContaining(errorMessage);
});
