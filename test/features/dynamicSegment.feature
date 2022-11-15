Feature: Dynamic-segments functionality

  Scenario: User is able to create new segment
    Given user is logged and on "Dynamic-Segments" page
    When user tries to create new segment with valid values
    Then new segment is created

  Scenario: User is not able to create new segment without "Segment name" field
    Given user is logged and on "Dynamic-Segments" page
    When user tries to create new segment without "Segment name" field
    Then new segment cannot be created

  Scenario: User is not able to create new segment without "Add filter" field
    Given user is logged and on "Dynamic-Segments" page
    When user tries to create new segment without "Add filter" field
    Then new segment cannot be created

  Scenario: User is able to delete segment from list
    Given user is logged and on "Dynamic-Segments" page
    When user tries to delete selected segment from the list
    Then element will be removed from list

  Scenario: User is able to rename segment in edit section
    Given user is logged and on "Dynamic-Segments" page
    When user tries to enter new value in field "SEGMENT NAME" in edit section
    Then new value is displayed

  Scenario: User is able to change value of "Filters" field in edit section
    Given user is logged and on "Dynamic-Segments" page
    When user tries to change value in field "Filters" in edit section
    Then new value is displayed

  Scenario: User is not able to leave empty "SEGMENT NAME" field in edit section
    Given user is logged and on "Dynamic-Segments" page
    When user tries to leave empty "SEGMENT NAME" field in edit section
    Then edited segment cannot be saved

  Scenario: User is able to sort in ascending order segments by "NAME"
    Given user is logged and on "Dynamic-Segments" page
    When user tries to sort segments by "NAME" in ascending order
    Then segments by "NAME" are in ascending order

  Scenario: User is able to sort in descending order segments by "NAME"
    Given user is logged and on "Dynamic-Segments" page
    When user tries to sort segments by "NAME" in descending order
    Then segments by "NAME" are in descending order

  Scenario: User is able to sort in ascending order segments by "CREATED"
    Given user is logged and on "Dynamic-Segments" page
    When user tries to sort segments by "CREATED" in ascending order
    Then segments by "CREATED" are in ascending order

  Scenario: User is able to sort in descending order segments by "CREATED"
    Given user is logged and on "Dynamic-Segments" page
    When user tries to sort segments by "CREATED" in descending order
    Then segments by "CREATED" are in descending order