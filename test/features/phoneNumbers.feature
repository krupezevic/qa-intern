
@functionalTest
Feature: PhoneNumbers functionality

    @phone
    Scenario: user is able to create New number successfully
        Given user is on the Phone Numbers page
        When user tries to create New phone number
        Then user is created the phone number
    @phone2
    Scenario: user is able to use Actions-Release
        Given phone number for Actions is created
        When user tries to Release phone number
        Then user is executed Release

    Scenario: user is able to use Actions-Make Default
        Given phone number for Actions is created
        When user tries to use Actions-Make Default
        Then user is executed Make Default