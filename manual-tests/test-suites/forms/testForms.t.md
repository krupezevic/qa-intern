# Forms functionality

* User is able to create a new form
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed

* User is not able to create new form successfully with empty field `SuperPhone URL`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Use `SuperPhone URL` empty field
  * ==>`SAVE` button is disabled
  * ==> `SAVE` button is on the right side

* User is able to click on `Learn more about Forms`-clickable text for more information
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `Learn more about Forms`
  * ==> User got new page with more information about Forms `Learn more about Forms`
  * ==> The URL should be `https://www.superphone-stage.com/getting-started-on-superphone/setting-up-your-forms`

* User is able to create a new form with insert string at `SuperPhone URL`
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert string in `SuperPhone URL`
  * Click `SAVE` button
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is not able to create a new form when the input field `SuperPhone URL` is space
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * If try insert space in `SuperPhone URL`-you cant do that
  * ==> `SAVE` button should be disabled
  * ==> `SAVE` button is on the right side

* User is not able to create a new form if `Custom redirect url` is not correctly written
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert string without protocol or extension in `SuperPhone URL`
  * `SuperPhone URL` should be incorrect
  * ==> `SAVE` button should be disabled
  * ==> `SAVE` button is on the right side

* User is able to create a new form with empty field in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert correct string in `SuperPhone URL`
  * `Form Submission` field empty
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to create a new form with 1 character in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert correct string in `SuperPhone URL`
  * Insert string with 1 character in `Form Submission`
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to create a new form with 159 character in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert correct string in `SuperPhone URL`
  * Insert string with 159 character in `Form Submission`
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to create a form with 160 character in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert correct string in `SuperPhone URL`
  * Insert string with 160 character in `Form Submission`
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to create a form with 161 character in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert correct string in `SuperPhone URL`
  * Insert string with 161 character in `Form Submission`
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to create a form with max 53 emojis in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click on `New` button
  * ==> modal is displayed
  * Insert to 53 emojis in `Form Submission`
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to sort forms by `CREATED` in descending order
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click to sort forms by `CREATED` in descending order
  * ==> The values are listed in descending order

* User is able to sort forms by `CREATED` in ascending order
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click to sort forms by `CREATED` in ascending order
  * ==> The values are listed in ascending order

* User is able to sort forms by `CONTACT` in descending order
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click to sort forms by `CONTACT` in descending order
  * ==> The values are listed in descending order

* User is able to sort forms by `CONTACT` in ascending order
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click to sort forms by `CONTACT` in ascending order
  * ==> The values are listed in ascending order

* User is able to `enable` Forms
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click `enable` button
  * ==> Form is enabled

* User is able to `disabled` Forms
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on Forms page
  * Click `disable` button
  * ==> Form is disabled