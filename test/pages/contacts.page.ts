import actions from "../utils/actions";
import { Contact } from "../test-data/contacts";

class ContactsPage {


    public get emailInput(){
        return $('.SpModalContentHolder .form-group:nth-child(4) input');
    }

    public get phoneNumberInput(){
        return $('.SpModalContentHolder .SpFormItem .react-tel-input input');
    }

    public get lastNameInput(){
        return $('.SpModalContentHolder .form-group:nth-child(2) input');
    }

    public get firstNameInput(){
        return $('.SpModalContentHolder .form-group:nth-child(1) input');
    }

    public get singleContactButton(){
        return $('.SpRightContentWrapper .action-menu-second .menu-content-item:nth-child(1)');
    }

    public get nameDataFieldForAssertion(){
        return $('.SpTableTbody .table-row:nth-child(1) td:nth-child(1) div:nth-child(2)');
    }

    public get textInputDataField(){
        return $('[placeholder="Enter the field name..."]');
    }

    public get textButton(){
        return $('.SpFormElementButton:nth-child(1)');
    }

    public get newButton(){
        return $('.buttons-content .button-wrapper');
    }

    public get dataFieldButton(){
        return $('[href="/settings/contacts-import/fields"]');
    }

    public get contactImportButton(){
        return $('.SpRightContentWrapper .action-menu-second .menu-content-item:nth-child(2)');
    }

    public get addContactsButton(){
        return $('.SpRightContentWrapper .contact-add');
    }

    public get countBoxTextInput(){
        return $('.SpCounterBoxWrapper .SpCountBox:nth-child(1) .SpCounterBoxText');
    }

    public get textBoxMessage() {
        return $('.SpEditor .DraftEditor-editorContainer [data-contents]');
    }

    public get composeIconButton() {
        return $('#compose-icon');
    }

    public get contactNameForAssertionFromDetailsBar() {
        return $('.SpDetailsContent .SpContactName');
    }

    public get contactNameForAssertion() {
        return $('.SpResponsiveTable .name-field .name');
    }
    
    public get tagNameButton() {
        return $('.SpTagWrapper .SpTags:nth-child(2)');
    }
    
    public get tagNameForAssertion() {
        return $('.tags-list');   
    }
    
    public get addTagSaveButton() {
        return $('.button-wrapper:nth-child(2)');
    }

    public get addTagInput() {
        return $('.SpTagSelection [style="display: inline-block;"] input');
    }

    public get addTagButton() {
        return $('.tags-list .SpTagEditIcon');
    }

    public get nameForAssertion() {
        return $('.SpModalContentHolder .name');
    }
    
    public get amountForAssertion() {
        return $('.SpModalContentHolder-inner .amount');
    }

    public get spentValue() {
        return $('.message-stats .clickable');
    }

    public get commerceAmountInput() {
        return $('.ContributionEditItem [placeholder="Amount"]');
    }

    public get commerceNameInput() {
        return $('.ContributionEditItem .field-name [placeholder="Name"]');
    }
    
    public get addContributionButton() {
        return $('.ContributionEditAdd .menu-content-item');
    }

    public get editContactButton() {
        return $('.contact-action .edit-2');
    }
    
    public get nicknameInput() {
       return $('.contact-editing .form-group:nth-child(3) [type="text"]');
    }

    public get saveButton() {
        return $('//span[.="Save"]');
    }
    
    public get userNickname() {
        return $('.SpContactDetailsBar b');
    }
    
    public get contactFromList() {
        return $('.SpTableTbody tr:nth-child(1) td:nth-child(2)');
    }
    
    public async editNickname(nickname: string) {
        await actions.clickOn(this.contactFromList);
        await actions.clickOn(this.editContactButton);
        await actions.typeIn(this.nicknameInput, nickname);
        await actions.clickOn(this.saveButton);
    }

    public async addContrabution(commerceName: string, commerceAmount: string) {
        await actions.clickOn(this.contactFromList);
        await actions.clickOn(this.editContactButton);
        await actions.clickOn(this.addContributionButton);
        await actions.typeIn(this.commerceNameInput, commerceName);
        await actions.typeIn(this.commerceAmountInput, commerceAmount);
        await actions.clickOn(this.saveButton);
        await actions.clickOn(this.spentValue);
    }

    public async addTag(tagName: string) {
        await actions.clickOn(this.contactFromList);
        await actions.clickOn(this.addTagButton);
        await this.addTagInput.doubleClick();
        await this.addTagInput.setValue(tagName);
        await browser.keys('Enter'); //TODO add tag input is changed
        await actions.clickOn(this.addTagSaveButton);
        await actions.clickOn(this.tagNameButton);
    }
    
    public async getTextContactNameForAssertion() {
        await this.contactNameForAssertion.getText();
        return this.getTextContactNameForAssertion();
    }

    public async getTextContactNameForAssertionFromaDetailsBar() {
        await this.contactNameForAssertionFromDetailsBar.getText();
        return this.getTextContactNameForAssertionFromaDetailsBar();
    }

    public async getTextTagName() {
        await this.tagNameForAssertion.getText();
        return this.getTextTagName();
    }

    public async enterTextMessage(textMessage: string) {
        await actions.clickOn(this.composeIconButton);
        await actions.typeIn(this.textBoxMessage, textMessage);
    }

    public async createNewDataField(fieldName: string) {
        await actions.clickOn(this.addContactsButton);
        await actions.clickOn(this.contactImportButton);
        await actions.clickOn(this.dataFieldButton);
        await actions.clickOn(this.newButton);
        await actions.clickOn(this.textButton);
        await actions.typeIn(this.textInputDataField, fieldName);
        await actions.clickOn(this.saveButton);
    }

    public async createNewContact(newContact: Contact) {
        await actions.clickOn(this.addContactsButton);
        await actions.clickOn(this.singleContactButton);
        await actions.typeIn(this.firstNameInput, newContact.firstName);
        await actions.typeIn(this.lastNameInput, newContact.lastName);
        await actions.typeIn(this.phoneNumberInput, newContact.phoneNumber)
        await actions.typeIn(this.emailInput, newContact.email)
        await actions.clickOn(this.saveButton);  
    }
    
}
export default new ContactsPage();