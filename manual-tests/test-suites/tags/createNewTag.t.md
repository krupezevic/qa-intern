# Tags functionality

* PRECONDITION:
    * ==> User is already logged in https://app.superphone-stage.com/login

* User is able to create new tag successfully with string
  * Navigate on tags
  * Click on `New` button
  * Insert string
  * Click on `save` button
  * ==> Tag is created, assert tr+1

* User is able to create new tag successfully with integer
  * Navigate on tags
  * Click on `New` button
  * Insert integer
  * Click on `save` button
  * ==> Tag is created, assert tr+1

* User is able to delete tag successfully
  * Navigate on tags
  * Select the user you want to delete
  * Click on `Delete` button
  * Click on `confirm` button
  * ==> Tag is removed, assert tr-1

* User is able to rename tag successfully
  * Navigate on tags
  * Select the user you want to rename
  * Click on `Rename` button
  * Insert new name
  * Click on `confirm` button
  * ==> Tag is renamed

* User is able to click sort button on name (up arrow)-descending order
  * Navigate on tags
  * Click on 'up arrow'
  * ==> The names are listed in alphabetical order

* User is able to click sort button on name (down arrow)-ascending order
  * Navigate on tags
  * Click on 'down arrow'
  * ==> The names are listed in alphabetical order in the opposite direction

* User is able to select/deselect all tags
  * Navigate on tags
  * Click checkpoint from "name"
  * ==> User has selected all tags
  * Second click on checkpoint from "name" will deselect all tags
  * ==> User has deselected all tags


