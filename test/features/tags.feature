Feature: Tags functionality


  Scenario: User is able to create new tag successfully
    Given User is on the Tags Page
    When user tries to create New tag name
    Then created tag is displayed

  Scenario: User is able to delete tag successfully
    Given new tag is created
    When user tries to delete tag
    Then tag is removed

  Scenario: User is able to rename tag successfully
    Given new tag is created
    When user tries to rename tag
    Then tag is renamed

  Scenario: User is able to Combine tags successfully
    Given Tags for combine are created
    When user tries to combine tags
    Then tags are combined