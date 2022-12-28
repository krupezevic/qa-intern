# Updates page functionality

* <b>User is able to search `updates` by filter
    * <b>PRECONDITION:
    * ==> User should have Scheduled or Sent updates
    * ========================================
    * Open [superphone app](https://app.superphone-stage.com/segments)
    * Insert valid Email
    * Insert valid Password
    * Click on `LOGIN` button
    * Navigate to `Updates` page
    * Click on `View All Updates`
    * ==> Dropdown is visible
    * Click on `Sent Updates`
    * ==> User is seeing only sent updates


* <b>User is able to `Send Scheduled Update`
    * Open [superphone app](https://app.superphone-stage.com/segments)
    * Insert valid Email
    * Insert valid Password
    * Click on `LOGIN` button
    * Navigate to `Updates` page
    * Click on `New Update` button
    * In the `Compose your message` field type in some text with merge field `
    * On the `Recipients` section choose `All Contacts`
    * On the `Scheduled Time` section choose 1 minute from current time
    * On the `Interval` section choose `Once`
    * Click on the `Save` button
    * Click on the filters `dropdown` and select `Scheduled Updates`
    * ==> Previously sent update is visible


* <b>User is able to `Edit Scheduled Update`
    * <b>PRECONDITION:
    * ==> User should have Scheduled Update
    * =================================
    * Open [superphone app](https://app.superphone-stage.com/segments)
    * Insert valid Email
    * Insert valid Password
    * Click on `LOGIN` button
    * Navigate to `Updates` page
    * Click on `All Updates` and select `Scheduled Updates`
    * Find previously created update and click on it
    * Click on the `Edit Update` button
    * Edit `Compose your message` field and click on the `Save` button
    * Click on the first update
    * ==> Scheduled update message is edited


* <b>User is able to `Delete Scheduled Update`
    * Open [superphone app](https://app.superphone-stage.com/segments)
    * Insert valid Email
    * Insert valid Password
    * Click on `LOGIN` button
    * Navigate to `Updates` page
    * Click on `New Update` button
    * In the `Compose your message` field type in some text
    * On the `Recipients` section choose `All Contacts`
    * On the `Scheduled Time` section choose 1 minute in the future
    * On the `Interval` section choose `Once`
    * Click on the `Save` button
    * Click on `All Updates` and select `Scheduled Updates`
    * Find previously created update and click on it
    * Click on the `Delete Update` button
    * Edit `Confirm` button
    * ==> `Scheduled Update` is deleted


* <b>Scheduled update was sent at the correct time
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate to `Updates` page
  * Click on `New Update` button
  * In the `Compose your message` field type in some text with merge field `
  * On the `Recipients` section choose `All Contacts`
  * On the `Scheduled Time` section choose 1 minute in the future
  * On the `Interval` section choose `Once`
  * Click on the `Save` button
  * Click on the filters `dropdown` and select `Scheduled Updates`
  * ==> Scheduled update is visible
  * Wait for the scheduled time
  * ==> Scheduled message is not visible


* <b>Scheduled update is in the `sent updates` filter search after scheduled time
  * Open [superphone app](https://app.superphone-stage.com/segments)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate to `Updates` page
  * Click on `New Update` button
  * In the `Compose your message` field type in some text with merge field `
  * On the `Recipients` section choose `All Contacts`
  * On the `Scheduled Time` section choose 1 minute in the future
  * On the `Interval` section choose `Once`
  * Click on the `Save` button
  * Click on the filters `dropdown` and select `Scheduled Updates`
  * ==> Scheduled update is visible
  * Wait for the scheduled time
  * ==> Scheduled message is not visible
  * Click on the filters `dropdown` and select `Sent Updates`
  * ==> Scheduled update is visible