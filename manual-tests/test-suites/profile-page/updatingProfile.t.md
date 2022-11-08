# Updating profile functionality

* User is able to add profile picture
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Click on `UPDATE` image icon
  * Select image file to upload on profile and click `Select`
  * ==> image is shown in `Edit image` window with available buttons `Crop`, `Circle`, `Rotate` and `UPLOAD`
  * Click on `UPLOAD` button
  * Click on `SAVE` button
  * ==> Picture is displayed on page

* User is able to remove profile picture
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Click on `X` on right upper side of image icon
  * Click `SAVE` button
  * ==> Picture is removed from profile

* User is able to change firstname - 2 characters 
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Rename `FIRSTNAME` field with 2 characters
  * CLick on `SAVE` button
  * ==> Firstname renamed in list

* User is not able to change firstname - 1 char
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Rename `FIRSTNAME` field with 1 char
  * ==> Button `SAVE` is not clickable

* User is able to change lastname
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Rename `LASTNAME` field 
  * CLick on `SAVE` button
  * ==> Lastname renamed in list

* User is able to change password
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Insert valid password in `EXISTING PASSWORD` field
  * Insert new password in field `NEW PASSWORD`
  * Insert new password in field `CONFIRM NEW PASSWORD`
  * CLick on `SAVE` button
  * ==> Message in confirm box: `Success Password changed`

* User is not able to change password-invalid password
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Insert invalid password in `EXISTING PASSWORD` field
  * Insert new password in field `NEW PASSWORD`
  * Insert new password in field `CONFIRM NEW PASSWORD`
  * ==> Button `SAVE`  in section `Password` is not clickable

* User is not able to change password-empty field `NEW PASSWORD`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Insert valid password in `EXISTING PASSWORD` field
  * Leave empty field in `NEW PASSWORD`
  * Insert new password in field `CONFIRM NEW PASSWORD`
  * ==> Button `SAVE` in section `Password` is not clickable

* User is not able to change password-empty field `CONFIRM NEW PASSWORD`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Insert valid password in `EXISTING PASSWORD` field
  * Insert new password in field `NEW PASSWORD`
  * Leave empty field in `CONFIRM NEW PASSWORD`
  * ==> Button `SAVE` in section `Password` is not clickable

* User is not able to change password-different values for `CONFIRM NEW PASSWORD` and `NEW PASSWORD`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Insert valid password in `EXISTING PASSWORD` field
  * Insert value `12345` in field `NEW PASSWORD`
  * Insert value `123456` field `CONFIRM NEW PASSWORD`
  * ==> Button `SAVE` in section `Password` is not clickable

* User is able to send `Dynamic vCard`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Insert value `John` in `FIRST NAME` field
  * Click `SAVE` button
  * ==> Value `John` is displayed in `FIRST NAME` field

* User is not able to send `Dynamic vCard`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * ==> Button `SAVE` in section `Dynamic vCard` is not clickable

* User is not able to upload photo bigger than 150kB in `Dynamic vCard` section
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email 
  * Insert valid Password 
  * Click on `LOGIN` button
  * Navigate to `Profile` page
  * Click on `UPDATE` in section `Dynamic vCard`
  * Select image file size 160kB to upload on profile and click `Select`
  * ==> Alert box with message `File <file_name> is too big. The accepted file size is less than 150.00kB`