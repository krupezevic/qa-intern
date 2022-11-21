import { sample } from "../test-data/dynamicVCard";
import Actions from "../utils/actions";

class ProfilePage {

    public get firstName() {
        return $('[placeholder="Enter your First name"]');
    }

    public get lastName() {
        return $('[placeholder="Enter your Last name"]');
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

    public get currentPassword() {
        return $('#currentPassword');
    }

    public get newPassword() {
        return $('#password');
    }

    public get confirmPassword() {
        return $('#repeatPassword');
    }

    public get userInfo() {
        return $('.userName');
    }

    public get logoutLink() {
        return $('.sp-dropdown-inner a[href="/logout"]');
    }

    public get firstNameDynamicVCard() {
        return $('[placeholder="First Name"]');
    }

    public get lastNameDynamicVCard() {
        return $('[placeholder="Last Name"]');
    }

    public get title() {
        return $('[placeholder="Job Title"]');
    }

    public get organization() {
        return $('[placeholder="Company Name"]');
    }

    public get email() {
        return $('[placeholder="Email"]');
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
        return $('[placeholder="https://"]');
    }
    public get website() {
        return $('[placeholder="Web Site"]');
    }

    public get zipCode() {
        return $('[placeholder="Postal Code"]');
    }

    public get note() {
        return $('[placeholder="Note"]');
    }

    public async enterNameAndLastnameFields(name: string, lastname: string) {
        await Actions.typeIn(this.firstName, name);
        await Actions.typeIn(this.lastName, lastname);
        await Actions.clickOn(this.clickSave);
    }

    public async enterPasswordFields(currentPassword: string, newPassword: string, confirmPassword: string) {
        await Actions.typeIn(this.currentPassword, currentPassword);
        await Actions.typeIn(this.newPassword, newPassword);
        await Actions.typeIn(this.confirmPassword, confirmPassword);
        await Actions.clickOn(this.clickSavePassword);
    }

    public async logoutFromAccount() {
        await Actions.clickOn(this.userInfo);
        await Actions.clickOn(this.logoutLink);
    }
    public async enterAllDynamicVCardFields() {
        await Actions.typeIn(this.firstNameDynamicVCard, sample.firstName);
        await Actions.typeIn(this.lastNameDynamicVCard, sample.lastName);
        await Actions.typeIn(this.title, sample.title);
        await Actions.typeIn(this.organization, sample.organization);
        await Actions.typeIn(this.email, sample.email);
        await Actions.typeIn(this.facebook, sample.facebook);
        await Actions.typeIn(this.instagram, sample.instagram);
        await Actions.typeIn(this.twitter, sample.twitter);
        await Actions.typeIn(this.linkedin, sample.linkedin);
        await Actions.typeIn(this.youtube, sample.youtube);
        await Actions.typeIn(this.snapchat, sample.snapchat);
        await Actions.typeIn(this.soundcloud, sample.soundcloud);
        await Actions.typeIn(this.store, sample.store);
        await Actions.typeIn(this.website, sample.website);
        await Actions.typeIn(this.zipCode, sample.zipCode);
        await Actions.typeIn(this.note, sample.note);

        await Actions.clickOn(this.clickSaveDynamicVCard);
    }
}
export default new ProfilePage();