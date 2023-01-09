import actions from "../utils/actions";
import { contacts } from "../test-data/contacts";

class ContactsPage {

    public get editContactButton() {
        return $('.contact-action .edit-2');
    }

    public get nicknameInput() {
        return $('.contact-editing .form-group:nth-child(3) .SpFieldInputWrapper [type="text"]');
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

    public async clickOnEditContactButton() {
        await actions.clickOn(this.editContactButton);
    }
    
    public async clickOnContact() {
        await actions.waitForElementToBeDisplayed(this.contactFromList);
        await this.contactFromList.moveTo();
        await this.contactFromList.click();
    }
    
    public async editNickname() {
        await actions.typeIn(this.nicknameInput, contacts.nickname);
        await actions.clickOn(this.saveButton);
    }

}
export default new ContactsPage();