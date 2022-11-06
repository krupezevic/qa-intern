# Login functionality

* User is able to login successfully
    * Open [superphone app](https://app.superphone-stage.com)
    * Insert valid Email `qa.chargebee@yopmail.com`
    * Insert valid Password
    * Click on `LOGIN` button 
    * ==> User is logged in
    * ==> Messages screen is displayed
    * ==> The URL should be `https://app.superphone-stage.com/messages`

* User is not able to login successfully - invalid password
  * Open [superphone app](https://app.superphone-stage.com)
  * Insert valid Email `qa.chargebee@yopmail.com`
  * Insert invalid Password `f.e. invalidPassword1234`
  * Click on `LOGIN` button
  * ==> User should not be logged in
  * ==> Message `ERROR: Invalid username or password.` should be shown

* User is not able to login successfully - empty password
  * Open [superphone app](https://app.superphone-stage.com)
  * Insert valid Email `qa.chargebee@yopmail.com`
  * Leave Password field empty
  * Click on `LOGIN` button
  * ==> User should not be logged in
  * ==> Message `Please fill in this field.` should be shown

* User is not able to login successfully - invalid email
  * Open [superphone app](https://app.superphone-stage.com)
  * Insert invalid Email `f.e. test@test.com`
  * Leave Password field empty
  * Click on `LOGIN` button
  * ==> User should not be logged in
  * ==> Message `ERROR: Invalid username or password.` should be shown
  
* User is not able to login successfully - invalid email format (without @ sign)
  * Open [superphone app](https://app.superphone-stage.com)
  * Insert invalid Email `f.e. test`
  * Click on `LOGIN` button
  * ==> User should not be logged in
  * ==> Message `Please include an '@' in the email address. 'test' is missing an '@'.` should be shown

* User is not able to login successfully - invalid email format (without part after @ sign)
  * Open [superphone app](https://app.superphone-stage.com)
  * Insert invalid Email `f.e. test@`
  * Click on `LOGIN` button
  * ==> User should not be logged in
  * ==> Message `Please enter a part following '@'. 'test@' is incomplete.` should be shown

* User is not able to login successfully - empty email
    * Open [superphone app](https://app.superphone-stage.com)
    * Leave Email field empty
    * Insert some password `f.e. pass123`
    * Click on `LOGIN` button
    * ==> User should not be logged in
    * ==> Message `Please fill in this field.` should be shown

* User is not able to login successfully - empty email and password
  * Open [superphone app](https://app.superphone-stage.com)
  * Leave Email and Password fields empty
  * Click on `LOGIN` button
  * ==> User should not be logged in
  * ==> Message `Required field` should be shown above both inputs
