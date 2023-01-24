Feature: Tags functionality

  Scenario: User is able to create new tag
    Given user is on the Tags Page
    When user tries to create New tag name
    Then tag is created and displayed

  Scenario: User is able to delete tag
    Given user is on the Tags Page
    When user tries to delete tag
    Then tag is deleted

  Scenario: User is able to rename tag
    Given user is on the Tags Page
    When user tries to rename tag
    Then tag is renamed

  Scenario: User is able to combine tags
    Given user is on the Tags Page
    When user tries to combine tags
    Then tags are combined