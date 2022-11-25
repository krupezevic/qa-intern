Feature: Dynamic-segments functionality
   @only
   Scenario: User is able to create new segment
      Given user is on Dynamic Segment page
      When user tries to create new segment with valid values
      Then new segment is created

   # Scenario: User is not able to create new segment without "Segment name" field
   #   Given user is on Dynamic Segment page
   #   When user tries to create new segment without Segment name field
   #   Then save button is disabled

   # Scenario: User is not able to create new segment without "Add filter" field
   #   Given user is on Dynamic Segment page
   #   When user tries to create new segment without Add filter field
   #   Then save button is disabled

   Scenario: User is able to rename segment in edit section
      Given new dynamic segment is created
      When user tries to enter new value in field SEGMENT NAME in edit section
      Then segment is edited

   Scenario: User is able to delete segment from list
      Given new dynamic segment is created
      When user tries to delete selected segment from the list
      Then element is removed from the list

# Scenario: User is able to change value of "Filters" field in edit section
#   Given user is on Dynamic Segment page
#   When user tries to change value in field Filters in edit section
#   Then segment is edited

# Scenario: User is not able to leave empty "SEGMENT NAME" field in edit section
#   Given user is on Dynamic Segment page
#   When user tries to leave empty SEGMENT NAME field in edit section
#   Then save button is disabled

# Scenario: User is able to sort in ascending order segments by "NAME"
#   Given user is on Dynamic Segment page
#   When user tries to sort segments by name in ascending order
#   Then segments are sorted by name in ascending order

# Scenario: User is able to sort in descending order segments by "NAME"
#   Given user is on Dynamic Segment page
#   When user tries to sort segments by name in descending order
#   Then segments are sorted by name in descending order

# Scenario: User is able to sort in ascending order segments by "CREATED"
#   Given user is on Dynamic Segment page
#   When user tries to sort segments by created date in ascending order
#   Then segments are sorted by created date in ascending order

# Scenario: User is able to sort in descending order segments by "CREATED"
#   Given user is on Dynamic Segment page
#   When user tries to sort segments by created date in descending order
#   Then segments are sorted by created date in descending order