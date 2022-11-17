import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import navigationPage from "../pages/navigation.page";
import dynamicSegmentPage from "../pages/dynamicSegment.page";

Given('user is on Dynamic Segment page', async () => {
    await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
    await navigationPage.navigateToDynamicSegmentAndCLick();
});

When('user tries to create new segment with valid values', async () => {
    await dynamicSegmentPage.addNewSegment("jovana");
});

Then('new segment is created', async () => {
    const expectedSegmentName = await dynamicSegmentPage.selectSegmentByName.getText();
    await expect(expectedSegmentName).toHaveTextContaining("jovana");
});

When('user tries to create new segment without Segment name field', async () => {
});

Then('new segment cannot be created', async () => {
});

When('user tries to create new segment without Add filter field', async () => {
});

When('user tries to delete selected segment from the list', async () => {
});

Then('element is removed from the list', async () => {
});

When('user tries to enter new value in field SEGMENT NAME in edit section', async () => {
});

Then('segment is edited', async () => {
});

When('user tries to change value in field Filters in edit section', async () => {
});

When('user tries to leave empty SEGMENT NAME field in edit section', async () => {
});

Then('edited segment cannot be saved', async () => {
});

When('user tries to sort segments by NAME in ascending order', async () => {
});

Then('segments are sorted by name in ascending order', async () => {
});

When('user tries to sort segments by NAME in descending order', async () => {
});

Then('segments are sorted by name in descending order', async () => {
});

When('user tries to sort segments by created date in ascending order', async () => {
});

Then('segments are sorted by created date in ascending order', async () => {
});

When('user tries to sort segments by created date in descending order', async () => {
});

Then('segments are sorted by created date in descending order', async () => {
});

Given('segment is created', async () => {

});