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

    @skip #TODO after new tag was created, "update" button became gold, but it is not clickable (locator is good).
    Scenario: User is able to add tag to conversation
        Given user is on the conversation page
        When user tries to add tag to the conversation
        Then the tag is added to the conversation 

    Scenario: User is able to see decrement in number of remaining characters when writing message
        Given user is on the conversation page
        When user input text in message box
        Then number of remaining characters were decreased
    
    Scenario: User is able to add nickname to contact
        Given user is on the conversation page
        When user add nickname to contact
        Then user had nickname with first and last name
    
    Scenario: User is able to send Vcard to contact
        Given user is on the conversation page
        When user tries to send Vcard 
        Then Vcard download link was sent

    @skip #TODO when input text in message box and after new saved response was created, inputted text is displayed as in a mirror
    Scenario: User is able to create new saved response
        Given user is on the conversation page
        When user tries to create new saved response
        Then new saved response was created
    
    Scenario: User is able to delete new saved response
        Given user is on the conversation page
        When user tries to delete new saved response
        Then new saved response was deleted

 