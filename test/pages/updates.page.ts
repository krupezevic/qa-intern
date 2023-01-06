import Actions from "../utils/actions";

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

    public get selectRecipients() {
        return $("//div[contains(text(),'All Contacts')]")
    }

    public get scheduledTime() {
        return $('.react-datepicker__input-container')
    }

    public get selectTime() {
        return $('.react-datepicker__time-list')
    }

    public get saveUpdate() {
        return $('(//button)[4]')
    }

    public get scheduleUpdate() {
        return $("(//span[normalize-space()='Schedule'])[1]")
    }

    public get allUpdates() {
        return $("(//span[contains(text(),'All Updates')])[1]")
    }

    public get scheduledUpdates() {
        return $("//span[normalize-space()='Scheduled Updates']")
    }

    public get checkUpdate() {
        return $('.filter-label')
    }

    public async newScheduledUpdate(name: string) {
        await Actions.clickOn(this.newUpdateButton);
        await Actions.clickOn(this.updateTextField);
        await Actions.typeIn(this.updateTextField, name);
        await Actions.clickOn(this.updateRecipients);
        await Actions.clickOn(this.selectRecipients);
        await Actions.clickOn(this.scheduledTime);
        await Actions.clickOn(this.selectTime);
    }

    public async sendScheduledUpdate() {
        await Actions.clickOn(this.saveUpdate);
        await Actions.clickOn(this.scheduleUpdate);
        await Actions.clickOn(this.allUpdates);
        await Actions.clickOn(this.scheduledUpdates);
    }

    public async checkScheduledUpdate() {
        await Actions.clickOn(this.allUpdates);
        await Actions.clickOn(this.scheduledUpdates);
    }

}

export default new UpdatesPage();