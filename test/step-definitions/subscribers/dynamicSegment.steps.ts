import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../../pages/login.page";
import navigationPage from "../../pages/navigation.page";
import segmentsPage from "../../pages/subscribers/dynamicSegment.page";
import { segments } from "../../test-data/segments";

const {segmentName, segmentAge} = segments

Given('the user is on Dynamic Segments page', async () => {
  await loginPage.login(`${process.env.CHARGEBEE_EMAIL}`, `${process.env.PASSWORD}`);
  await navigationPage.navigateToDynamicSegmentAndCLick();
})

When('the user tries to create a new segment', async () => {
  await segmentsPage.createSegment(segmentName, segmentAge);
  await segmentsPage.saveNewSegment();
})

Then('the new segment is created', async () => {
  expect(segmentsPage.firstSegment).toHaveTextContaining(segmentName);
})

When('the user tries to edit segment', async () => {
  await segmentsPage.editSegment('edit');
  await segmentsPage.saveNewSegment();
})

Then('the segment is edited', async () => {
  expect(segmentsPage.firstSegment).toHaveTextContaining('edit');
})

When('the user tries to delete segment', async () => {
  await segmentsPage.deleteSegment();
})

Then('the segment is deleted', async () => {
  expect(segmentsPage.firstSegment).not.toHaveTextContaining('edit');
})

When('the user tries to add multiple filters', async () => {
  await segmentsPage.addFilters(segmentName);
  await segmentsPage.saveNewSegment();
  await segmentsPage.firstSegment.click()
})

Then('the fillters are added', async () => {
  expect(segmentsPage.checkAddedLastMonth).toHaveTextContaining('Added Last Month');
  expect(segmentsPage.checkHasBeenContacted).toHaveTextContaining('Has been Contacted');
})