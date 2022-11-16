import { Then, When, Given } from '@wdio/cucumber-framework'

Given('User is on the Tags Page', async () => { });

When('User try to create New Tag Name with empty filed', async () => { });

Then('Save button is disabled', async () => { });

When('User try to create New Tag Name with string', async () => { });

Then('Tag is created', async () => { });

When('User try to delete Tag', async () => { });

Then('Tag is removed', async () => { });

When('User try to rename Tag', async () => { });

Then('Tag is renamed', async () => { });

When('User try to sort tags by name in ascending order', async () => { });

Then('The names are listed in alphabetical order in the opposite direction', async () => { });

When('User try to sort tags by name in descending order', async () => { });

Then('The names are listed in alphabetical order', async () => { });

When('User try to sort tags by CREATED in ascending order', async () => { });

Then('The values are listed in ascending order', async () => { });

When('User try to sort tags by CREATED in descending order', async () => { });

Then('The values are listed in descending order', async () => { });

When('User try to sort tags by CONTACT in ascending order', async () => { });

Then('The values are listed in ascending order', async () => { });

When('User try to sort tags by CONTACT in descending order', async () => { });

Then('The values are listed in descending order', async () => { });

When('User try to select all tags', async () => { });

Then('User has selected all tags', async () => { });

When('User try to deselect all tags', async () => { });

Then('User has deselected all tags', async () => { });

When('User try to combine tags', async () => { });

Then('Tags are combined', async () => { });
