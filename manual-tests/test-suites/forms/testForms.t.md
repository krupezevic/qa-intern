# Forms functionality

* PRECONDITION:
    * ==> User is already logged in https://app.superphone-stage.com/login

* User is able to click on `Learn more about Forms`-clickable text for more information
    * Navigate on Forms
    * Click on `Learn more about Forms`-clickable text
    * ==> User got new page with more information about `Learn more about Forms`
    * ==> The URL should be `https://www.superphone-stage.com/getting-started-on-superphone/setting-up-your-forms`

* User is able to create a new form
    * Navigate on Forms
    * Click on `New` button
    * ==> User got new page `New Form`
    * ==> The URL should be `https://app.superphone-stage.com/forms/new`

* User is not able to create a new form without first input field
    * Navigate on Forms
    * Click on `New` button
    * `SuperPhone URL` field is empty or already exist
    * `Save` button is not clickable
    * ==> Form is not created
    * ==> Message `Domain is not valid or already exist` should be shown

* User is able to create a new form with first input field `SuperPhone URL`
    * Navigate on Forms
    * Click on `New` button
    * `SuperPhone URL` field is filled
    * ==> Form is created
    * ==> Message `SuccessForm created successfully`

* User is not able to create a new form when the first input field `SuperPhone URL` is space
    * Navigate on Forms
    * Click on `New` button
    * `SuperPhone URL` field can not be `space`
    * ==> `space` is disabled

* User is not able to create a new form if `Custom redirect url` is not correctly written
    * Navigate on Forms
    * Click on `New` button
    * `SuperPhone URL` field is correctly written
    * `Custom redirect url` field is not correctly written
    * ==> `Save` button disabled
    * ==> Form should not be created

* User is able to create a new form just if `SuperPhone URL` and `Custom redirect url` are correctly written
    * Navigate on Forms
    * Click on `New` button
    * `SuperPhone URL` field is not correctly written
    * `Custom redirect url` field is correctly written
    * ==> `Save` button disabled
    * ==> Form should not be created