# Forms functionality

* User is not able to create `New` form successfully with empty field `SuperPhone URL`
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Use `SuperPhone URL` empty field
  * ==>`SAVE` button is disabled
  * ==> `SAVE` button is on the right side

* User is able to click on `Learn more about Forms`-clickable text for more information
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `Learn more about Forms`
  * ==> User got new page with more information about Forms `Learn more about Forms`
  * ==> The URL should be `https://www.superphone-stage.com/getting-started-on-superphone/setting-up-your-forms`

* User is able to create a `New` form with insert value at `SuperPhone URL`
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert value in `SuperPhone URL` field, ex. http://example.com
  * Click `SAVE` button
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is not able to create a `New` form when the input field `SuperPhone URL` is space
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert space in `SuperPhone URL`-you cant do that
  * ==> `SAVE` button should be disabled
  * ==> `SAVE` button is on the right side

* User is not able to create a `New` form when insert 2 words or letters with space between in `SuperPhone URL` field
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert space in `SuperPhone URL`-you cant do that
  * ==> `SAVE` button should be disabled
  * ==> `SAVE` button is on the right side

* User is not able to create a `New` form if `Custom redirect url` is not correctly written
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert string without protocol or extension in `SuperPhone URL`
  * `SuperPhone URL` should be incorrect
  * ==> `SAVE` button should be disabled
  * ==> `SAVE` button is on the right side

* User is able to create a `New` form with empty field in `Form Submission`
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert correct string in `SuperPhone URL`
  * `Form Submission` field empty
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is not able to create a `New` form with empty field in `SuperPhone URL` and insert value in `Form Submission`
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * `SuperPhone URL` is empty filed 
  * Insert correct value in `Form Submission`
  * ==> `SAVE` is disabled
  * ==> `SAVE` button is on the right side

* User is able to create a `New` form with empty field in `Form Submission` and insert value in `SuperPhone URL`
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * `Form Submission` is empty filed
  * Insert correct value in `SuperPhone URL`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to create a `New` form with 1 character in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert correct string in `SuperPhone URL`
  * Insert string with 1 character in `Form Submission`
  * Click on `SAVE`
  * ==> Form is created `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side

* User is able to writte message with 159, 160, 161 character in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert correct value in `SuperPhone URL` field
  * Insert value with 159 character in `Form Submission`
  * ==> 1 segment displayed
  * Insert value with 160 character in `Form Submission`
  * ==> 1 segment displayed
  * Insert value with 161 character in `Form Submission`
  * ==> 2 segment displayed

* User is able to writte message with 52, 53, 54 emojis in Form Submission
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * Click on `New` button
  * ==> `New Form` page is opened
  * Insert correct value in `SuperPhone URL` field
  * Insert value with 52 emojis in `Form Submission`
  * ==> 1 segment displayed
  * Insert value with 53 emojis in `Form Submission`
  * ==> 1 segment displayed
  * Insert value with 54 emojis in `Form Submission`
  * ==> 2 segment displayed

* User is able to sort forms by `CREATED` in ascending/descending order
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * ==> `Forms` page is opened
  * Click to sort forms by `CREATED` in descending order
  * ==> The values are listed in descending order
  * Click to sort `Forms` by `CREATED` in ascending order
  * ==> The values are listed in ascending order

* User is able to sort forms by `CONTACT` in descending order
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * ==> `Forms` page is opened
  * Click to sort `Forms` by `CONTACT` in descending order
  * ==> The values are listed in descending order
  * Click to sort forms by `CONTACT` in ascending order
  * ==> The values are listed in ascending order

* User is able to `Disable`/`Enable` Forms
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * ==> `Forms` page is opened
  * Click `Disable` button
  * ==> Form is changed on `Enable`
  * ==> `Enable` button is on the right side
  * Click `Enable` button
  * ==> Form is changed on `Disabled`
  * ==> `Disabled` button is on the right side

* User is able to update file (picture)
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * ==> `Forms` page is opened
  * Click on `update file`s
  * Find file (picture) format 144x144 u want update
  * Click on `UPLOAD`
  * ==> `UPLOAD` button is on the right side
  * ==> File (picture) is displayed at `Forms` page

* User is able to edit `Form`
  * Open [superphone app](https://app.superphone-stage.com/login)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate on `Forms` page
  * ==> `Forms` page is opened
  * Click on `Edit` button
  * Make edit
  * Click on `SAVE` button
  * ==> Form is edited `SuccessForm created successfully`
  * ==> `SAVE` button is on the right side