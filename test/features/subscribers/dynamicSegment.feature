
Feature: Dynamic-segments functionality

Scenario: The user is able to create new segment
  Given the user is on Dynamic Segments page
  When the user tries to create a new segment
  Then the new segment is created

Scenario: The user is able to edit segment
  Given the user is on Dynamic Segments page
  When the user tries to edit segment
  Then the segment is edited

Scenario: The user is able to delete segment
  Given the user is on Dynamic Segments page
  When the user tries to delete segment
  Then the segment is deleted

Scenario: The user is able to add multiple filters to the segment
  Given the user is on Dynamic Segments page
  When the user tries to add multiple filters
  Then the fillters are added