Feature: Tags functionality


  # Scenario: User is not able to create new tag successfully with empty field
  #   Given User is on the Tags Page
  #   When user clicks on New button
  #   And user tries to create New Tag name with empty filed
  #   Then save button is disabled

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

  # Scenario: User is able to sort tags by name in ascending order
  #   Given User is on the Tags Page
  #   When user sorts tags by name in ascending order
  #   Then the values are listed in ascending order

  # Scenario: User is able to sort tags by name in descending order
  #   Given User is on the Tags Page
  #   When user sorts tags by name in descending order
  #   Then the values are listed in descending order

  # Scenario: User is able to sort tags by created in ascending order
  #   Given User is on the Tags Page
  #   When user sorts tags by created in ascending order
  #   Then the values are listed in ascending order

  # Scenario: User is able to sort tags by created in descending order
  #   Given User is on the Tags Page
  #   When user sorts tags by created in descending order
  #   Then the values are listed in descending order

  # Scenario: User is able to sort tags by contact in ascending order
  #   Given User is on the Tags Page
  #   When user sorts tags by contact in ascending order
  #   Then the values are listed in ascending order

  # Scenario: User is able to sort tags by contact in descending order
  #   Given User is on the Tags Page
  #   When user sorts tags by contact in descending order
  #   Then the values are listed in descending order

  # Scenario: User is able to select all tags
  #   Given User is on the Tags Page
  #   When user tries to select all tags
  #   Then user selected all tags

  # Scenario: User is able to deselect all tags
  #   Given User is on the Tags Page
  #   When user tries to deselect all tags
  #   Then user has deselected all tags

  Scenario: User is able to Combine tags successfully
    Given Tags for combine are created
    When user tries to combine tags
    Then tags are combined