import actions from "../utils/actions";
import { contacts } from "../test-data/contacts";

class ContactsPage {

    public get countBoxTextInput(){
        return $('.SpCounterBoxWrapper  .SpCountBox:nth-child(1) .SpCounterBoxText');

    }
    public get textBoxMessage() {
        return $('.SpEditor .DraftEditor-editorContainer [data-contents]');
        //return $('.SpEditor .DraftEditor-editorContainer .public-DraftEditor-content');
    }
    public get composeIconButton() {
        return $('#compose-icon');
    }
    public get contactNameForAssertionFromDetailsBar() {
        return $('.SpDetailsContent .SpContactName');
    }

    public get contactNameForAssertion() {
        return $('.SpResponsiveTable .name-field');
       
       // return $('.SpTable td:nth-child(2)');
        //.SpTable td:nth-child(2)
        //.SpTable .table-row:nth-child(1)
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
        return $('.SpTagSelection .Select-input input');
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

    public get SpentValue() {
        return $('.message-stats .clickable');
    }

    public get CommerceAmountInput() {
        return $('.ContributionEditItem [placeholder="Amount"]');
    }

    public get CommerceNameInput() {
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
    
    public async editNickname() {
        await actions.clickOn(this.contactFromList);
        await actions.clickOn(this.editContactButton);
        await actions.typeIn(this.nicknameInput, contacts.nickname);
        await actions.clickOn(this.saveButton);
    }

    public async addContrabution() {
        await actions.clickOn(this.contactFromList);
        await actions.clickOn(this.editContactButton);
        await actions.clickOn(this.addContributionButton);
        await actions.typeIn(this.CommerceNameInput, contacts.commerceName);
        await actions.typeIn(this.CommerceAmountInput, contacts.commerceAmount);
        await actions.clickOn(this.saveButton);
        await actions.clickOn(this.SpentValue);
    }

    public async addTag(tagName: string) {
        await actions.clickOn(this.contactFromList);
        await actions.clickOn(this.addTagButton);
        await actions.typeIn(this.addTagInput, tagName);
        await browser.keys('Enter');
        await actions.clickOn(this.addTagSaveButton);
        //await (this.assertMessage).waitForExist;
       // await actions.waitForElementToBeClickable(this.tagNameButton);
        await actions.clickOn(this.tagNameButton);
        //await actions.waitForElementToBeDisplayed(this.contactNameForAssertion);
    }
    
    public async getTextContactNameDetailsBar() {
        await this.contactNameForAssertionFromDetailsBar.getText();
    }

    public async getTextTagName() {
        await this.tagNameForAssertion.getText();
    }

    public async enterTextMessage(textMessage: string) {
        await actions.clickOn(this.composeIconButton);
        await actions.typeIn(this.textBoxMessage, textMessage);
    }
    
    
}
export default new ContactsPage();