import Actions from "../utils/actions";

class ContactsPage {

   /* public get contactsButton() {
        return $('.//*[@id="app"]/div[1]/div/div/div[2]/section/div/div[1]/nav/div[2]/a');
    }

    public async clickOnContactsButton() {
        await Actions.clickOn(this.contactsButton);

    }*/



    public get editContactButton() {
        return $('.moon icon-new edit-2');
    }


    public async clickOnEditContactButton() {
        await Actions.clickOn(this.editContactButton);

    }
    public get contactName() {
        return $('.sc-cTAqQK eMpORC SpContactName');
    }
    public async selectContact() {
        await Actions.clickOn(this.contactName);

    }
    


    public get nickname() {
    return $('//*[@id="app"]/section[2]/div/div[2]/div/div/section/div[3]/div');

}
    public get saveButton() {
    return $('.//*[@id="app"]/section[2]/div/div[2]/div/div/section/div[16]/div[2]/button');

}
//public async clickOnSaveButtone() {
  //  await actions.clickOn(this.saveButton);
//}

   public async editNickname(nickname: string) {
    await Actions.typeIn(this.nickname, nickname);
    console.log('test123');
    await Actions.clickOn(this.saveButton);
}
public get userNickname() {
    return $('.//*[@id="app"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div/div/div[1]/div[2]/div/div[1]/div[2]/div[5]/div[2]');

}
}
export default new ContactsPage();