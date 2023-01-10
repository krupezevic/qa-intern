import actions from "../utils/actions";

class UpdatesPage {
    public get newUpdateButton() {
        return $('.cta__new-update-button')
    }

    public get updateTextField() {
        return $("div[role='textbox']")
    }

    public get updateRecipients() {
        return $('.css-tlfecz-indicatorContainer')
    }

    public get selectAllContacts() {
        return $("//div[contains(text(),'All Contacts')]")
    }

    public get scheduledTime() {
        return $('.react-datepicker__input-container')
    }

    public get selectTime() {
        return $('.react-datepicker__time-list')
    }

    public get saveUpdate() {
        return $("//span[normalize-space()='Save']")
    }

    public get scheduleUpdate() {
        return $("//span[normalize-space()='Schedule']")
    }

    public get allUpdates() {
        return $("//span[@class='label-text']")
    }

    public get scheduledUpdates() {
        return $("//span[normalize-space()='Scheduled Updates']")
    }

    public get checkUpdate() {
        return $('.filter-label span')
    }

    public get firstUpdate() {
        return $('.update-item:nth-child(1)')
    }

    public get numberOfDidntRespond() {
        return $('.SpAvatarContent > div:nth-child(1)')
    }

    public get viewNumberOfDidntRespond() {
        return $('.Supper-button-text')
    }

    public get verifyNumberOfDidntRespond() {
        return $("//div[@class='sc-dtDOqo gMcGwr SpHeading']")
    }

    public async newUpdate(name: string) {
        await actions.clickOn(this.newUpdateButton);
        await actions.clickOn(this.updateTextField);
        await actions.typeIn(this.updateTextField, name);
        await actions.clickOn(this.updateRecipients);
        await actions.clickOn(this.selectAllContacts);
        await actions.clickOn(this.scheduledTime);
        await actions.clickOn(this.selectTime);
    }

    public async sendUpdate() {
        await actions.clickOn(this.saveUpdate);
        await actions.clickOn(this.scheduleUpdate);
    }

    public async checkScheduledUpdate() {
        await actions.clickOn(this.allUpdates);
        await actions.clickOn(this.scheduledUpdates);
    }

    public async checkNumberOfDidntResponded() {
        await actions.clickOn(this.firstUpdate);
    }

    public async verifyNumberOfDidntResponded() {
        await actions.clickOn(this.viewNumberOfDidntRespond);
    }

}

export default new UpdatesPage();