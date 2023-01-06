Feature: Conversation functionality


    Scenario: User is able to send message
        Given User is on the conversation page
        When User tries to send new message
        Then User sent new message

    @only
    Scenario: User is able to send saved response
        Given User is on the conversation page
        When User tries to send saved response
        Then User sent new message
