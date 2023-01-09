Feature: Contacts functionality
   
   @only
   Scenario: User is able to edit contact (Nickname)
      Given user is on the Contacts Page
      When user tries to edit contact
      Then contact is edited