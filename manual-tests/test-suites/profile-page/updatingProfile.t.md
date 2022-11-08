# Updating profile functionality

* User is able to add profile picture
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Click on `UPDATE` image icon
  * ==> a pop-up window is displayed
  * Click `Select file to upload` icon
  * ==> a pop-up window is displayed with title `open File`
  * Select image file to upload on profile and click `Select`
  * ==> image is shown in `Edit image` window with available buttons `Crop`, `Circle`, `Rotate` and `UPLOAD`
  * Click on `UPLOAD` button
  * ==> the picture is visible in the profile picture place and button `SAVE` is clickable
  * Click on `SAVE` button
  * ==> message in confirm box:`Success Basic info successfully updated`

* User is able to remove profile picture
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Click on `X` on right upper side of image icon
  * Click `SAVE` button

* User is able to change firstname - 2 characters 
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Rename `FIRSTNAME` field with 2 characters
  * ==> button `SAVE` is clickable
  * CLick on `SAVE` button
  * ==> message in confirm box: `Success Basic info successfully updated`

* User is not able to change firstname - 1 char
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Rename `FIRSTNAME` field with 1 char
  * ==> button `SAVE` is not clickable

* User is able to change lastname
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Rename `LASTNAME` field 
  * ==> button `SAVE` is clickable
  * CLick on `SAVE` button
  * ==> message in confirm box: `Success Basic info successfully updated`

* User is able to change password
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Insert valid password in `EXISTING PASSWORD` field
  * ==> field `EXISTING PASSWORD` filled with hidden characters
  * Insert new password in field `NEW PASSWORD`
  * ==> field `NEW PASSWORD` filled with hidden characters
  * Insert new password in field `CONFIRM NEW PASSWORD`
  * ==> field `CONFIRM NEW PASSWORD` filled with hidden characters
  * CLick on `SAVE` button
  * ==> message in confirm box: `Success Password changed`

* User is not able to change password-invalid password
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Insert invalid password in `EXISTING PASSWORD` field
  * ==> field `EXISTING PASSWORD` filled with hidden characters
  * Insert new password in field `NEW PASSWORD`
  * ==> field `NEW PASSWORD` filled with hidden characters
  * Insert new password in field `CONFIRM NEW PASSWORD`
  * ==> field `CONFIRM NEW PASSWORD` filled with hidden characters
  * ==> button `SAVE`  in section `Password` is not clickable

* User is not able to change password-empty field `NEW PASSWORD`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Insert valid password in `EXISTING PASSWORD` field
  * ==> field `EXISTING PASSWORD` filled with hidden characters
  * Insert new password in field `CONFIRM NEW PASSWORD`
  * ==> field `CONFIRM NEW PASSWORD` filled with hidden characters
  * ==> button `SAVE` in section `Password` is not clickable

* User is not able to change password-empty field `CONFIRM NEW PASSWORD`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Insert valid password in `EXISTING PASSWORD` field
  * ==> field `EXISTING PASSWORD` filled with hidden characters
  * Insert new password in field `NEW PASSWORD`
  * ==> field `NEW PASSWORD` filled with hidden characters
  * ==> button `SAVE` in section `Password` is not clickable

* User is not able to change password-different values for `CONFIRM NEW PASSWORD` and `NEW PASSWORD`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> page title to be `Settings-SuperPhone`
  * Insert valid password in `EXISTING PASSWORD` field
  * ==> field `EXISTING PASSWORD` filled with hidden characters
  * Insert value `12345` in field `NEW PASSWORD`
  * ==> field `NEW PASSWORD` filled with hidden characters
  * Insert value `123456` field `CONFIRM NEW PASSWORD`
  * ==> field `CONFIRM NEW PASSWORD` filled with hidden characters
  * ==> button `SAVE` in section `Password` is not clickable

* User is able to send `Dynamic vCard`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> Page title to be `Settings-SuperPhone`
  * Insert value `John` in `FIRST NAME` field
  * ==> Value `John` is visible in `FIRST NAME` field
  * Click `SAVE` button 
  * ==> Button `SAVE` in section `Dynamic vCard` is not clickable
  * Refresh page
  * ==> Value `John` is displayed in `FIRST NAME` field

* User is not able to send `Dynamic vCard`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> Page title to be `Settings-SuperPhone`
  * ==> Button `SAVE` in section `Dynamic vCard` is not clickable

* User is not able to upload photo bigger than 150kB in `Dynamic vCard` section
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email `nkolaric1982@yopmail.com`
  * Insert valid Password `superphone`
  * Click on `LOGIN` button
  * Click on `Profile` link
  * ==> Page title to be `Settings-SuperPhone`
  * Click on `UPDATE` in section `Dynamic vCard`
  * ==> a pop-up window is displayed
  * Click `Select file to upload` icon
  * ==> a pop-up window is displayed with title `open File`
  * Select image file size 160kB to upload on profile and click `Select`
  * ==> Alert box with message `File test1.jpg is too big. The accepted file size is less than 150.00kB`