Feature: Forms functionality
 
    Scenario: User is able to create New form with SuperPhone URL and Form Submission fields
        Given User is on the Forms Page
        When user tries to create New form
        Then new form is created

    Scenario: User is able to Edit form
        Given Form is created
        When user tries to edit form
        Then form is edited

    Scenario: User is able to Enable/Disable form
        Given Form is created
        When user tries to Disable form
        Then form is Disabled