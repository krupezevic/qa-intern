Feature: Conversation functionality
   
    Scenario: User is able to send message
        Given user is on the conversation page
        When user tries to send new message
        Then new message was sent
    
    Scenario: User is able to send saved response
        Given user is on the conversation page
        When user tries to send saved response
        Then new message was sent
   
    Scenario: User is able to archive conversation
        Given user is on the conversation page
        When user tries to archive conversation
        Then the conversation was archived
