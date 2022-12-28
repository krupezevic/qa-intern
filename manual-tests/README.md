# QA Test Suite
Place where all manual test cases are stored, along with their executions.

## Prerequisite
- IntelliJ Community Edition
- Test Management Plugin added to IntelliJ

## Test Preparation

### Branching strategy
You should avoid pushing code directly on `main` branch. Instead, for every new feature create a separate branch. 
Branch should be named in format `<card_number>/short_description`. 
Examples:
- `12345/short_description`
- `ABC-1234/short_description`

**NOTE:** In cases when there is no card number, use next format: `NO_CARD/short_description`

When the feature is tested and ready to be released, branch should be merged to `main`. 
Once it's merged, branch should be deleted. 
Do this regularly to avoid a huge list of inactive branches. 

### Writing test cases
Some rules need to be followed when writing new test cases. 
Tests are written in markdown files, therefore certain syntax has to be applied. 
As we are using Test Management Plugin inside IntelliJ, there are some restrictions in markdown syntax as well.
In order to avoid rendering issues, please follow next rules.
#### Rules to be followed:
- Tests should be grouped by functionalities and placed inside `/manual-tests/test-suites` folder. 
- Test files should have extension `.t.md` (e.g. `login.t.md`)
- Title of tests should start with `User is able to ...`
- In case there are some preconditions, please use following syntax
```
    * PRECONDITION:
    * ==> precondition #1
    * ==> precondition #2
    * ===========================
```
- For expected results please use following sign `==>`
- Try to avoid writing too long test cases

#### An example of test case:
```
* User is able to see Import History
  * PRECONDITION:
  * ==> User already has some imported contacts 
  * ===========================
  * Open [superphone app](https://app.superphone-stage.com)
  * Insert valid Email
  * Insert valid Password
  * Click on `LOGIN` button
  * Navigate to Contacts page
  * Click on `Add Contacts` and choose `Contact Import`
  * ==> Contact Import page is opened
  * Click on `Import History` tab
  * ==> Import History is shown with statuses 
```

## Test Executions

### Feature testing
All test executions files related to feature testing should be stored in `/manual-tests/executions/features` folder.
Feature test execution files should be named in format `[<card_number>]-short_description` (or in case there is no card `short_description`).
Make sure you put a card number inside square brackets.

### Regression testing
All test executions files related to regression testing should be stored in `/manual-tests/executions/regression` folder.
Regression test execution files should be named in format `[yyyy:MM:dd]-Regression`.

### Rules to be followed
- Test execution files should have extension `.r.md` (e.g. `[1234]-short_description.r.md`, `[2022:08:01]-Regression.r.md`)
- Once test is executed, you have to manually change 
  - the status from `unknown` to one of following: `passed, failed or skipped`
  - add your name to test. Make sure you add prefix `@` (e.g. `[passed] @<your_name> User is able to ...`)
- In case of failing test, put a comment bellow expected result. Make sure you use `>` sign
```
  * ==> Contact Import page is opened
  * > Contact Import page is not opened
```
- In case of skipping test, put a comment bellow title. Make sure you use `>` sign
```
* User is able to ...
* > Test is skipped...
```
- In cases when it's applicable put screenshots (make sure you put correct path to the image)
```
* ==> Contact Import page is opened
* ![Contact Import page](../../assets/12345/contact-import-page.png)
```

## Useful symbols

<br>🔍 (Conversations page)</br>
<br>📞 (Conversations page)</br>
<br>📝 (Conversations page)</br>
<br>📎 (`Message Contacts` modal)</br>
<br>⚡ (`Message Contacts` modal)</br>
<br>😊 (`Message Contacts` modal)</br>
<br>✖️ (`Message Contacts` modal)</br>
<br>🔥 (Conversations page)</br>
<br>🕑 (Conversations page)</br>
<br>➕ (`Saved Response` modal)</br>
<br>✏️ (Contacts page - contact detail bar)</br>
<br>🚥 (Contacts page - contact detail bar)</br>
<br>⚙️ (Contacts page - contact detail bar)</br>

## Useful links for testing
- [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- [RGBA to Hex Converter](https://rgbacolorpicker.com/rgba-to-hex)
- [Fake email addresses](https://yopmail.com/en/)
- [Random string generator](http://www.unit-conversion.info/texttools/random-string-generator/)
- [Phone Number Parser Demo](https://htmlpreview.github.io/?https://github.com/google/libphonenumber/blob/master/javascript/i18n/phonenumbers/demo-compiled.html)
