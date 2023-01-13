Feature: Contacts functionality
   
   
   Scenario: User is able to edit contact (Nickname)
      Given user is on the Contacts Page
      When user tries to edit contact
      Then contact is edited

   Scenario: User is able to edit contact (Add contribution)
      Given user is on the Contacts Page
      When user tries to add contribution
      Then contribution is added

   Scenario: User is able to edit contact (Add tag)
      Given user is on the Contacts Page
      When user tries to add tag
      Then tag is added