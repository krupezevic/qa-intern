import actions from "../utils/actions";
import { contacts } from "../test-data/contacts";

class ContactsPage {

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

}
export default new ContactsPage();