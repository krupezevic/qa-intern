import actions from "../utils/actions";

class ContactsPage {

    public get editContactButton() {
        return $('.moon icon-new edit-2');
    }

    public get nicknameInput() {
        return $('.contact-editing .form-group:nth-child(3) .SpFieldInputWrapper');
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
        //await actions.clickOn(this.contactFromList);
        await this.contactFromList.moveTo();
        await this.contactFromList.click();
        console.log('contactClicked')
    }
    
    public async editNickname(nickname: string) {
        await actions.typeIn(this.nicknameInput, nickname);
        console.log('test123');
        await actions.clickOn(this.saveButton);
}

//public get userNicknameNew() {
 //   return $('.SpContactDetailsBar b');
//}
}
export default new ContactsPage();