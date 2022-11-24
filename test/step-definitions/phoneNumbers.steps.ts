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
});

When('user tries to use Actions-Make Default', async () => {
  await phoneNumbersPage.actionMakeDefault();
});

Then('user is executed Make Default', async () => { });




// When('user clicks on Learn more', async () => { });

// Then('user got new page with more information Learn more', async () => { });

// When('user clicks on New button', async () => { });

// When('user uses empty field', async () => { });

// Then('ADD button is disabled', async () => { });

// When('user clicks on New button', async () => { });

// When('clicks Get in touch', async () => { });

// Then('modal SuperPhone TEST is displayed', async () => { });

// When('user clicks on New button', async () => { });

// When('user inserts one number', async () => { });

// Then('ADD button is disabled', async () => { });

// When('user clicks on New button', async () => { });

// When('user inserts two numbers', async () => { });

// Then('ADD button is disabled', async () => { });

// When('user clicks on New button', async () => { });

// When('user inserts nine numbers', async () => { });

// Then('ADD button is disabled', async () => { });

// When('user clicks on New button', async () => { });

// When('user inserts ten numbers', async () => { });

// Then('ADD button is unabled', async () => { });

// When('user clicks on New button', async () => { });

// When('user tries insert eleven numbers', async () => { });

// Then('ADD button is unabled', async () => { });

// When('user sorts Phone Numbers by created in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts Phone Numbers by created in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user sorts Phone Numbers by inbound in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts Phone Numbers by inbound in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user sorts Phone Numbers by outbound in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts Phone Numbers by outbound in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user sorts Phone Numbers by subscribers in ascending order', async () => { });

// Then('the values are listed in ascending order', async () => { });

// When('user sorts Phone Numbers by subscribers in descending order', async () => { });

// Then('the values are listed in descending order', async () => { });

// When('user clicks to sort phone numbers by region', async () => { });

// Then('the phone numbers are sorted by region', async () => { });

// When('user clicks on icon for copy phone number', async () => { });

// Then('number is copied', async () => { });

// When('user clicks on Disable Routing', async () => { });

// Then('modal Disable Routing is displayed', async () => { });

// When('user clicks on Read More about Routing', async () => { });

// Then('user got new page with more information Read More about Routing', async () => { });