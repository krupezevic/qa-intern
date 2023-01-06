Feature: Contacts functionality
   
   @only
   Scenario: User is able to edit contact (Nickname)
      Given User is on the Contacts Page
      When User tries to edit contact (Nickname)
      Then Contact is edited