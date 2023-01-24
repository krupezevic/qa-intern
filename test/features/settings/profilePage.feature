Feature: profile page functionality

Scenario: User is able to upload profile image
    Given user is on profile page
    When user tries to upload image
    Then image was uploaded

Scenario: User is able to change first and last name
    Given user is on profile page
    When user tries to change first and last name
    Then first and last name were changed

Scenario: User is not able to change password if new password is not confirmed
    Given user is on profile page
    When user tries to change password without confirming new password
    Then password was not changed

Scenario: User is able to change password
    Given user is on profile page
    When user change current password
    Then the password was changed
