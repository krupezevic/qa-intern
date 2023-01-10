import actions from "../utils/actions";
import { contacts } from "../test-data/contacts";

class ContactsPage {
    
    public get nameForAssertion() {
        return $('.SpModalContentHolder-inner .name');
    }
    
    public get amountForAssertion() {
        return $('.SpModalContentHolder-inner .table-row .amount');
    }

    public get SpentValue() {
        return $('.link');
    }
    public get CommerceAmountInput() {
        return $('.ContributionEditItem [placeholder="Amount"]');
    }

    public get CommerceNameInput() {
        return $('.ContributionEditItem .field-name [placeholder="Name"]');
    }
    
    public get AddContribution() {
        return $('.ContributionEditAdd');
    }

    public get editContactButton() {
        return $('.contact-action .edit-2');
    }
    
    public get nicknameInput() {
        return $('.contact-editing .form-group:nth-child(3) .SpFieldInputWrapper [type="text"]');
    }

    public get saveButton() {
        return $('//span[.="Save"]');

    }//span[.="Save"]
    //div ["SpModalContentHolder-inner"] //span[.="Save"]
    //.contact-editing .lm span
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

    public async clickOnAddContrabution() {
        await actions.clickOn(this.AddContribution);
    }

    public async insertCommerceName() {
        await actions.typeIn(this.CommerceNameInput, contacts.commerceName);
        
    }
    public async insertCommerceAmount() {
        await actions.typeIn(this.CommerceAmountInput, contacts.commerceAmount);
        
    }
    public async clickOnSave() {
       // await actions.clickOn(this.saveButton);
        await actions.waitForElementToBeDisplayed(this.saveButton);
        await this.saveButton.moveTo();
        await this.saveButton.click();
    }
    public async clickOnSpentValue() {
        await actions.clickOn(this.SpentValue);
    }
}
export default new ContactsPage();