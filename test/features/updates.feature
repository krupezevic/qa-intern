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