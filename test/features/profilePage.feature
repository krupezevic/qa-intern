 Feature: Profile page functionality
#   @smoke
#   Scenario: User is able to change "FIRST NAME" and "LAST NAME" fields
#     Given user is on Profile page
#     When user tries to change profiles name and lastname
#     Then name and lastname are changed

#   Scenario: User is able to change password
#     Given user is on Profile page
#     When user tries to change password
#     Then password is changed

#   Scenario: User is able to enter values in all fields in "Dynamic vCard" section
#     Given user is on Profile page
#     When user tries to insert values in all fields
#     Then populated fields are saved

#   Scenario Outline: User is not able to change password
#     Given user is on Profile page
#     When user insert current password "<currentPassword>" and new pasword "<newPasword>" and confirm password "<confirmPassword>"
#     Then password is not changed

#     Examples:
#       | currentPassword | newPasword | confirmPassword |
#       | superphone      | example1   | example2        |
#       | superphone      | example1   |                 |
#       | superphone      |            | example2        |
#       | invalidPassword | example1   | example2        |
#       |                 |            |                 |
#       |                 | example1   | example1        |
#       |                 | example1   | example2        |