import actions from "../utils/actions";
import { contacts } from "../test-data/contacts";

class ContactsPage {
    
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
    
}
export default new ContactsPage();