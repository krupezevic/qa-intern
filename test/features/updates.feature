Feature: Updates Page Functionality

@only
Scenario: User is able to send scheduled update
  Given the user is on updates page
  When the user tries to send a scheduled update
  Then the previously scheduled update should be visible in the Scheduled Updates filter