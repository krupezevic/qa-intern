import actions from "../utils/actions";


class phoneNumbers {

    public get buttonNew() {
        return $('//button[.="New"]');
    }

    public get buttonAdd() {
        return $('//button[.="Add"]');
    }

    public get buttonConfirm() {
        return $('//button[.="Confirm"]');
    }

    public get firstNumberOfSix() {
        return $('div.pointer.number-option:nth-child(1)');
    }

    public get assertMessage() {
        return $('SpNotificationMessagesContent');
    }

    public get buttonActions() {
        return $('tr:nth-child(3) .SpActionMenuIconMoon');
    }

    public get optionRelease() {
        return $('//descendant::span[.="Release"][2]');
    }

    public get optionMakeDefault() {
        return $('//descendant::span[.="Make Default"][2]');
    }

    public async createNewPhoneNumber() {
        await actions.clickOn(this.buttonNew);
        await actions.clickOn(this.firstNumberOfSix);
        await actions.clickOn(this.buttonAdd);
        await actions.clickOn(this.buttonConfirm);
    }

    public async assertMessageWaitToBeDisplayed() {
        await (this.assertMessage).waitForExist;
    }

    public async actionRelease() {
        await actions.clickOn(this.buttonActions);
        await actions.clickOn(this.optionRelease);
        await actions.clickOn(this.buttonConfirm);
    }

    public async actionMakeDefault() {
        await actions.clickOn(this.buttonActions);
        await actions.clickOn(this.optionMakeDefault);
    }

}
export default new phoneNumbers();