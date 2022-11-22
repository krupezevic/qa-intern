import { dynamicVCard } from "../test-data/dynamicVCard";
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
        await Actions.typeIn(this.firstNameDynamicVCard, dynamicVCard.firstName);
        await Actions.typeIn(this.lastNameDynamicVCard, dynamicVCard.lastName);
        await Actions.typeIn(this.title, dynamicVCard.title);
        await Actions.typeIn(this.organization, dynamicVCard.organization);
        await Actions.typeIn(this.email, dynamicVCard.email);
        await Actions.typeIn(this.facebook, dynamicVCard.facebook);
        await Actions.typeIn(this.instagram, dynamicVCard.instagram);
        await Actions.typeIn(this.twitter, dynamicVCard.twitter);
        await Actions.typeIn(this.linkedin, dynamicVCard.linkedin);
        await Actions.typeIn(this.youtube, dynamicVCard.youtube);
        await Actions.typeIn(this.snapchat, dynamicVCard.snapchat);
        await Actions.typeIn(this.soundcloud, dynamicVCard.soundcloud);
        await Actions.typeIn(this.store, dynamicVCard.store);
        await Actions.typeIn(this.website, dynamicVCard.website);
        await Actions.typeIn(this.zipCode, dynamicVCard.zipCode);
        await Actions.typeIn(this.note, dynamicVCard.note);

        await Actions.clickOn(this.clickSaveDynamicVCard);
    }
}
export default new ProfilePage();