Feature: Tags functionality


  Scenario: User is not able to create new tag successfully with empty field
    Given User is on the Tags Page
    When User try to create New Tag Name with empty filed
    Then Save button is disabled

  Scenario: User is able to create new tag successfully with string
    Given User is on the Tags Page
    When User try to create New Tag Name with string
    Then Tag is created

  Scenario: User is able to delete tag/tags successfully
    Given User is on the Tags Page
    When User try to delete Tag
    Then Tag is removed

  Scenario: User is able to rename tag successfully
    Given User is on the Tags Page
    When User try to rename Tag
    Then Tag is renamed

  Scenario: User is able to sort tags by NAME in ascending order
    Given User is on the Tags Page
    When User try to sort tags by name in ascending order
    Then The names are listed in alphabetical order in the opposite direction

  Scenario: User is able to sort tags by NAME in descending order
    Given User is on the Tags Page
    When User try to sort tags by name in descending order
    Then The names are listed in alphabetical order

  Scenario: User is able to sort tags by CREATED in ascending order
    Given User is on the Tags Page
    When User try to sort tags by CREATED in ascending order
    Then The values are listed in ascending order

  Scenario: User is able to sort tags by CREATED in descending order
    Given User is on the Tags Page
    When User try to sort tags by CREATED in descending order
    Then The values are listed in descending order

  Scenario: User is able to sort tags by CONTACT in ascending order
    Given User is on the Tags Page
    When User try to sort tags by CONTACT in ascending order
    Then The values are listed in ascending order

  Scenario: User is able to sort tags by CONTACT in descending order
    Given User is on the Tags Page
    When User try to sort tags by CONTACT in descending order
    Then The values are listed in descending order

  Scenario: User is able to select all tags
    Given User is on the Tags Page
    When User try to select all tags
    Then User has selected all tags

  Scenario: User is able to deselect all tags
    Given User is on the Tags Page
    When User try to deselect all tags
    Then User has deselected all tags

  Scenario: User is able to Combine tag successfully
    Given User is on the Tags Page
    When User try to combine tags
    Then Tags are combined