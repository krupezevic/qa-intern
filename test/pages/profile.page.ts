import Actions from "../utils/actions";

class profilePage {
    public get firstName() {
        return $('.SpProfileColumn input[placeholder="Enter your First name"]');
    }

    public get lastName() {
        return $('.SpProfileColumn input[placeholder="Enter your Last name"]');
    }

    public get clickSave() {
        return $('//descendant::button[.="Save"][1]');
    }

    public get clickSavePassword() {
        return $('//descendant::button[.="Save"][2]');
    }

    public get clickSaveDynamicVCard() {
        return $('//descendant::button[.="Save"][3]');
    }

    public get currentPass() {
        return $('#currentPassword');
    }

    public get newPass() {
        return $('#password');
    }

    public get confirmPass() {
        return $('#repeatPassword');
    }

    public get userInfo() {
        return $('span.userName');
    }

    public get logoutLink() {
        return $('.sp-dropdown-inner a[href="/logout"]');
    }

    public get firstNameDynamicVCard() {
        return $('input[placeholder="First Name"]');
    }

    public get lastNameDynamicVCard() {
        return $('input[placeholder="Last Name"]');
    }

    public get title() {
        return $('input[placeholder="Job Title"]');
    }

    public get organization() {
        return $('input[placeholder="Company Name"]');
    }

    public get email() {
        return $('input[placeholder="Email"]');
    }

    public get facebook() {
        return $('#facebook');
    }

    public get instagram() {
        return $('#instagram');
    }

    public get twitter() {
        return $('#twitter');
    }

    public get linkedin() {
        return $('#linkedin');
    }

    public get youtube() {
        return $('#youtube');
    }

    public get snapchat() {
        return $('#snapchat');
    }

    public get soundcloud() {
        return $('#soundcloud');
    }

    public get store() {
        return $('input[placeholder="https://"]');
    }
    
    public get webSite() {
        return $('input[placeholder="Web Site"]');
    }

    public get zipCode() {
        return $('input[placeholder="Postal Code"]');
    }

    public get note() {
        return $('input[placeholder="Note"]');
    }

    public async enterNameAndLastnameFieldsAndClick(name: string, lastname: string) {
        await Actions.typeIn(this.firstName, name);
        await Actions.typeIn(this.lastName, lastname);
        await Actions.clickOn(this.clickSave);
    }

    public async enterPasswordFields(currentP: string, newP: string, confirmP: string) {
        await Actions.typeIn(this.currentPass, currentP);
        await Actions.typeIn(this.newPass, newP);
        await Actions.typeIn(this.confirmPass, confirmP);
        await Actions.clickOn(this.clickSavePassword);
    }

    public async logoutAndLogInToAccount() {
        await Actions.clickOn(this.userInfo);
        await Actions.clickOn(this.logoutLink);
    }
    public async enterAllDynamicVCardFields(){
        await Actions.typeInVC(this.firstNameDynamicVCard, "sample1");
        await Actions.typeInVC(this.lastNameDynamicVCard, "sample2");
        await Actions.typeInVC(this.title, "sample3");
        await Actions.typeInVC(this.organization, "sample4");
        await Actions.typeInVC(this.email, "Emailmail1@gmail.com");
        await Actions.typeInVC(this.facebook, "https://facebook.com/test1");
        await Actions.typeInVC(this.instagram, "https://instagram.com/test1");
        await Actions.typeInVC(this.twitter, "https://twitter.com/Test");
        await Actions.typeInVC(this.linkedin, "https://linkedin.com/in/test1");
        await Actions.typeInVC(this.youtube, "https://youtube.com/test");
        await Actions.typeInVC(this.snapchat, "https://snapchat.com/add/test");
        await Actions.typeInVC(this.soundcloud, "https://soundcloud.com/test");
        await Actions.typeInVC(this.store, "sample5");
        await Actions.typeInVC(this.webSite, "sample6");
        await Actions.typeInVC(this.zipCode, "sample7");
        await Actions.typeIn(this.note, "sample8");

        await Actions.clickOn(this.clickSaveDynamicVCard);
    }
}
export default new profilePage();