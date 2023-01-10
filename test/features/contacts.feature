Feature: Contacts functionality
   
   
   Scenario: User is able to edit contact (Nickname)
      Given user is on the Contacts Page
      When user tries to edit contact
      Then contact is edited
@only
   Scenario: User is able to edit contact
      Given user is on the Contacts Page
      When user tries to add contribution
      Then contribution is added