Feature: PhoneNumbers functionality


  Scenario: User is able to click on Learn more-clickable text for more information
    Given User is on the Phone Numbers Page
    When User clicked on Learn more
    Then User got new page with more information Learn more

  Scenario: User is not able to create New number successfully with empty field
    Given User is on the Phone Numbers Page
    When User used empty field
    Then ADD button is disabled

  Scenario: User is able to click Get in touch-clickable text
    Given User is on the Phone Numbers Page
    When User clicked on Get in touch
    Then modal SuperPhone [TEST] is displayed

  Scenario: User is not able to create phone number for United States with one inserted number
    Given User is on the Phone Numbers Page
    When User inserted one number
    Then ADD button is disabled

  Scenario: User is not able to create phone number for United States with two inserted numbers
    Given User is on the Phone Numbers Page
    When User inserted two numbers
    Then ADD button is disabled

  Scenario: User is not able to create phone number for United States with nine inserted numbers
    Given User is on the Phone Numbers Page
    When User inserted nine numbers
    Then ADD button is disabled

  Scenario: User is not able to create phone number for United States with ten inserted numbers
    Given User is on the Phone Numbers Page
    When User inserted ten numbers
    Then ADD button is unabled

  Scenario: User is not able to create phone number for United States with eleven inserted numbers
    Given User is on the Phone Numbers Page
    When User try insert eleven numbers
    Then ADD button is unabled

  Scenario: User is able to sort phone numbers by CREATED in ascending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by CREATED in ascending order
    Then The values are listed in ascending order

  Scenario: User is able to sort phone numbers by CREATED in descending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by CREATED in descending order
    Then The values are listed in descending order

  Scenario: User is able to sort phone numbers by INBOUND in ascending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by INBOUND in ascending order
    Then The values are listed in ascending order

  Scenario: User is able to sort phone numbers by INBOUND in descending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by INBOUND in descending order
    Then The values are listed in descending order

  Scenario: User is able to sort phone numbers by OUTBOUND in ascending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by OUTBOUND in ascending order
    Then The values are listed in ascending order

  Scenario: User is able to sort phone numbers by OUTBOUND in ascending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by OUTBOUND in descending order
    Then The values are listed in descending order


  Scenario: User is able to sort phone numbers by SUBSCRIBERS in ascending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by SUBSCRIBERS in ascending order
    Then The values are listed in ascending order

  Scenario: User is able to sort phone numbers by SUBSCRIBERS in descending order
    Given User is on the Phone Numbers Page
    When User sorted Phone Numbers by SUBSCRIBERS in descending order
    Then The values are listed in descending order

  Scenario: User is able to click region to sort phone numbers
    Given User is on the Phone Numbers Page
    When User clicked to sort phone numbers by REGION
    Then Phone numbers are sorts by REGION

  Scenario: User is able to click copy phone number
    Given User is on the Phone Numbers Page
    When User clicked on icon for copy phone number
    Then Number is copied

  Scenario: User is able to Disable Routing for phone number
    Given User is on the Phone Numbers Page
    When User clicked on Disable Routing
    Then Modal Disable Routing is displayed

  Scenario: User is able to click on Read More about Routing-clickable text for more information
    Given User is on the Phone Numbers Page
    When User clicked on Read More about Routing
    Then User got new page with more information Read More about Routing