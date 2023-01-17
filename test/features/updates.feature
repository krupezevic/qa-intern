
Feature: Updates Page Functionality

Scenario: User is able to send scheduled update
  Given the user is on updates page
  When the user tries to send a scheduled update
  Then the previously scheduled update should be visible in the Scheduled Updates filter

Scenario: Verify the number of contacts who didn't responded
  Given the user is on updates page
  When the user checks if the number of contacts who did not responded matches with the number on the view contacts page
  Then the user verifies that the numbers match

Scenario: User is able to resend update
  Given the user is on updates page
  When the user tries to resend update
  Then the update is sent

Scenario: Verify the number of recipients
  Given the user is on updates page
  When the user checks if the number of recipients match with number of contacts
  Then the user verifies that the number is the same

Scenario: User is able to change brand name and opt out
  Given the user is on compliance page
  When the user tries to change brand name and opt out
  Then the brand name and opt out is changed

Scenario: Number of characters limit
  Given the user is on updates page
  When the user clicks on the new update and inputs text
  Then the characters limit is decreased

Scenario: User is able to create segment on update
  Given the user is on updates page
  When the user tries to create a segment on update
  Then the segment is created

Scenario: User is able to create new saved response
  Given the user is on updates page
  When the user tries to create new saved response
  Then the new saved response is created

Scenario: User is able to delete saved response
  Given the user is on updates page
  When the user tries to delete saved response
  Then the saved response is deleted