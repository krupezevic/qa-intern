import { Given, Then, When } from '@wdio/cucumber-framework';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import loginPage from '../pages/login.page';
import navigationPage from '../pages/navigation.page';
import phoneNumbersPage from '../pages/phoneNumbers.page';
import actions from '../utils/actions';
import { faker } from '@faker-js/faker';

Given('user is on the Phone Numbers page', async () => {
  await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
  await navigationPage.navigationToPhoneNumbersPage();
});

When('user tries to create New phone number', async () => {
  await phoneNumbersPage.createNewPhoneNumber();
});

Then('user is created the phone number', async () => {
  await phoneNumbersPage.sumTableRows + 1;
});


Given('phone number for Actions is created', async () => {
  await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
  await navigationPage.navigationToPhoneNumbersPage();
  await phoneNumbersPage.createNewPhoneNumber();
});

When('user tries to Release phone number', async () => {
  await phoneNumbersPage.actionRelease();
});

Then('user is executed Release', async () => {
  await phoneNumbersPage.sumTableRows - 1;
});


When('user tries to use Actions-Make Default', async () => {
  await phoneNumbersPage.actionMakeDefault();
});

Then('user is executed Make Default', async () => {
  await expect('Number is on the top of the table');
});