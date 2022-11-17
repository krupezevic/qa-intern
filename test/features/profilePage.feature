Feature: Profile page functionality

   Scenario: User is able to change "FIRST NAME" and "LAST NAME" fields
      Given user is on Profile page
      When user tries to change profiles name and lastname 
      Then name and lastname are changed

    Scenario: User is able to change password 
      Given user is on Profile page
      When user tries to change password
      Then password is changed

      Scenario: User is able to enter values in all fields in profile details section
      Given user is on Profile page
      When user tries to insert values in all profile description fields
      Then populated fields are saved